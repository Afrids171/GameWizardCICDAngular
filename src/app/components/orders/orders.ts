import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [ReactiveFormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
constructor(private userService: UserService) { }
id: number = 0;
CartTotal: number = 0;
  Address = new FormControl('')
ngOnInit()
{
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
onConfirmOrder() 
{
  let obj: any = {
    TotalAmount: this.CartTotal,
      ShippingAddress: this.Address.value
    };
   this.userService.CreateOrder(this.id, obj).subscribe(
      (res: any) => {
        console.log("Order Creation Response:", res);
        alert("Order created successfully");
      },
      (err: any) => {
        console.log("Error:", err.error); 
        alert("Order creation failed");
      }
    );
  }


}

