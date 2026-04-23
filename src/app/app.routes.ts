import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Gamingconsole } from './components/gamingconsole/gamingconsole';
import { Aboutus } from './components/aboutus/aboutus';
import { Games } from './components/games/games';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Profile } from './components/profile/profile';
 
import { Addtocart } from './components/addtocart/addtocart';
import { Orders } from './components/orders/orders';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'console',component:Gamingconsole},
    {path:'about',component:Aboutus},
    {path:'games',component:Games},
    {path:'login',component:Login},
    {path:'signup',component:Signup},
    {path:'profile',component:Profile},
    {path:'addtocart',component:Addtocart},
    {path:"orders",component:Orders}
    
   
];
