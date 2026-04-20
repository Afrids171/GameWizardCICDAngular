import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Gamingconsole } from './components/gamingconsole/gamingconsole';
import { UserService } from './Services/user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GamingConsole');

// constructor(private userservice:UserService){}
// isProfile = false
// isLogin = false;

// ngOnInit()
// {
//     this.isProfile = this.userservice.isProfile 
// }
}
