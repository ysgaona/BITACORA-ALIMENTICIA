import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(paraRequest: HttpRequest<any>, next: HttpHandler) {
    const tokenSeguridad = localStorage.getItem('authToken');

    if(!tokenSeguridad) {
      return next.handle(paraRequest);
    }

    const miRequest = paraRequest.clone({
      headers: paraRequest.headers.set('Authorization', 'Bearer ' + tokenSeguridad)
    });

    return next.handle(miRequest);
  }
}
