import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  imports: [RouterLink],
  templateUrl: './addtocart.html',
  styleUrl: './addtocart.css',
})
export class Addtocart {
constructor(private userService: UserService, private router: Router) {}
isProfile = false;
cartItems: any[] = [];
cartTotal = 0;
quantity: number = 1; 


  ngOnInit(): void {  


localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));

    this.isProfile = this.userService.isProfile;
    const data = localStorage.getItem('cartItems');
   if (data) {
      const products = JSON.parse(data);
      this.cartItems = products;
   }
    this.calculateTotal();
  }

  calculateTotal()
  {
    this.cartTotal = 0;

    this.cartItems.forEach(item =>
    {
        this.cartTotal += item.price * item.quantity;
    })
  }
  

removeFromCart(item : any)
{
  const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
  if (index > -1) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }
}




  increaseQuantity(item: any) {

  item.quantity++;
  
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  this.calculateTotal();
  }


  decreaseQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.calculateTotal();  
  }
  }


onProceedToCheckout()
{
  this.router.navigate(['/orders']);
}


}


