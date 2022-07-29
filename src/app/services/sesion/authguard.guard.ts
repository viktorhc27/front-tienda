import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public _services: SesionService,
    public _router: Router
  ) {

  }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this._router.navigate(['/login']);
      return false;
      
    }
    this._router.navigate(['/home']);
    return true;
  }

}
