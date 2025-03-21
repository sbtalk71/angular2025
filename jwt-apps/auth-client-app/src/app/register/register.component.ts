import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userModel:User={email:'',password:''};
  constructor(private auth:AuthService){}

  onRegister(){
    //console.log(this.userModel)
    this.auth.register(this.userModel).subscribe(res=>localStorage.setItem('token',res.token));

  }
}
