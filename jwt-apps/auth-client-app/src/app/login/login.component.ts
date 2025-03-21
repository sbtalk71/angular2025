import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel:User={email:"",password:""};
  constructor(private auth:AuthService,private router:Router){}

  onLogin(){
    console.log(this.loginModel)
    this.auth.login(this.loginModel).subscribe({
     next: jwt=>{localStorage.setItem('token',jwt.token);this.router.navigate(['/'])},
      error: err=>console.log(err)
  })
  }

  
}
