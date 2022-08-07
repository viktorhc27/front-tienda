import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../../utils/config.service'
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SesionService {
  id: number
  token: string = "";
  email: string = "";
  nombre: string = "";
  imagen: string = "";
  rol: number;

  controller: string = "usuarios/"

  httpOptionsLogin = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private cookie: CookieService,
  ) {
    this.token = localStorage.getItem('token') as string;
    this.email = localStorage.getItem('email') as string;
    this.id = parseInt(localStorage.getItem('id') as string);
    this.rol = parseInt(localStorage.getItem('rol') as string);

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }


  login(credenciales: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/" + this.controller + 'login', credenciales);
  }

  islogged(): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.get(this.config.urlBase + "/" + this.controller + 'islogged', this.httpOptions);
  }
  saveSesion(token: any, id: any, email: any, rol: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    localStorage.setItem('rol', rol);

    this.token = localStorage.getItem('token') as string;
    this.email = localStorage.getItem('email') as string;
    this.id = parseInt(localStorage.getItem('id') as string);
    this.rol = parseInt(localStorage.getItem('rol') as string);
  }

  clearSesion(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('rol')
   

    this.email = "";
    this.id = 0;
    this.token = "";
    this.rol = 0;
  }
}
