import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    let requestClone=request.clone({
      setHeaders:{Authorization:'Bearer '+this.auth.getToken()}
    })
    console.log("interceptor in action.."+requestClone.headers.get('Authorization'))
    return next.handle(requestClone);
  }
}
