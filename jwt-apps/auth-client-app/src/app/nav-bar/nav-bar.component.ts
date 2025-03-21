import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private auth:AuthService,private router:Router){}
  get isLoggedIn(){
    return this.auth.loggedIn();
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/events'])

    
  }
}
