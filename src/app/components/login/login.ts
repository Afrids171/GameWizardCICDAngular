import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  isProfile = false;
  constructor(private userservice: UserService, private router: Router,private route: ActivatedRoute) { }

  email = new FormControl('')
  password = new FormControl('')

  Login() {

    let obj: any = {
      Email: this.email.value,
      Password: this.password.value
    };
    this.userservice.loginUser(obj).subscribe(
      (res: any) => {
        alert("Login successful");

       
        localStorage.setItem('token', res.token || 'loggedIn');
        localStorage.setItem('user', JSON.stringify(res.user));
        
        

        this.router.navigate(['/profile'], { replaceUrl: true });
        // console.log("Login Response:", res);
        this.userservice.IsLogin = true;
       
      },
      (err: any) => {
        console.log("Error:", err.error); 
        alert("Login failed");
      }
    )


    this.userservice.isProfile = true;

  }
}
