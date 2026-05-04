import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {  RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  constructor(private userService: UserService, private router: Router) { }
  id: number = 0;
  CartTotal: number = 0;
  Address = new FormControl('')
  ngOnInit() {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      console.log("User Data:", user);
      this.id = user.id;
      console.log("User Id:", this.id);

    }

    const cartTotalData = localStorage.getItem('carttotal');
    if (cartTotalData) {
      this.CartTotal = JSON.parse(cartTotalData);
      console.log("Cart Total:", this.CartTotal);
    }

  }
  onConfirmOrder() {
    let obj: any = {
      CustId: this.id,
      TotalAmount: this.CartTotal,
      PaymentMethod: "Upi",
      ShippingAddress: this.Address.value
    };
    this.userService.CreateOrder(obj).subscribe(
      (res: any) => {
        console.log("Order Creation Response:", res);
        alert("Order created successfully ");
        this.Address.reset();
        this.router.navigate(['/profile'], { replaceUrl: true });
        this.CartTotal = 0;
        localStorage.removeItem('carttotal');
      },
      (err: any) => {
        console.log("Error:", err.error);
        alert("Order creation failed");
        this.Address.reset();
        this.router.navigate(['/addtocart'], { replaceUrl: true });
      }
    );
  }


}

