import { Injectable, inject } from "@angular/core";
import { CanActivateFn, CanActivateChildFn, CanMatchFn, Router } from "@angular/router";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor() {}

  verificacion(): Observable<boolean> {
    const isAuthTokenPresent: boolean = !!localStorage.getItem('authToken');
    return of(isAuthTokenPresent);
  }
}

export const miAuthGuard: CanActivateFn | CanActivateChildFn | CanMatchFn = () => {
  return inject(AuthGuard).verificacion();
};
