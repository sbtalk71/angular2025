import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
private register_url='http://localhost:3000/api/register';
private login_url='http://localhost:3000/api/login'

  constructor(private http:HttpClient) { }

  register(user:User): Observable<any>{
    return this.http.post(this.register_url,user);
  }

  login(user:User): Observable<any>{
    return this.http.post(this.login_url,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
