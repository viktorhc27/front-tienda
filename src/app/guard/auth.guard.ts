import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/services/sesion/sesion.service'
import { AuthService } from '../services/sesion/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private SesionService: SesionService) { }

  redirec(flag: boolean): any {
    if (flag) {
      this.router.navigate(['home']);
    }
  }
  canActivate(): boolean {
    this.SesionService.islogged().subscribe((res: any) => {
      console.log(res);
      this.redirec(res.success)
      this.SesionService.saveSesion(res.model.token, res.model.id, res.model.correo, res.model.rol)
    })
    return true;
  }

}
