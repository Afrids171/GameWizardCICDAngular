import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-games',
  imports: [RouterLink],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
constructor (private userService : UserService) {} 


isProfile = false; 
isLogin = false;
  allProducts = signal<any[]>([]) 
  ngOnInit() {
    this.isLogin = this.userService.IsLogin;
        this.userService.getAllGames().subscribe((response) => {    
        this.allProducts.set(response);
      console.log(this.allProducts);

    this.isProfile = this.userService.isProfile;
    this.isLogin = this.userService.IsLogin;
  });
  }


cartItems:any[] = [];
addToCart(product: any)
{
  let existingCart = localStorage.getItem('cartItems');

  this.cartItems = existingCart ? JSON.parse(existingCart) : [];


  const cartProduct = {
    ...product,
    quantity: 1
  };

  this.cartItems.push(cartProduct);

  console.log(cartProduct);
  console.log("Cart:", this.cartItems);
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

  alert('Product added to cart!');
}

showLoginAlert()
{
  alert('Please login first');
}


}
