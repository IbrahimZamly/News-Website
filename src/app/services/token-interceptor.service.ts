import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let auth = this.authService.getToken()

    let tokenReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${auth}`
      }
    })

    return next.handle(tokenReq)
  }

  constructor(private authService:AuthService) { }
}
