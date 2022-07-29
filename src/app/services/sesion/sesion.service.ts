import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../../utils/config.service'
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SesionService {
  id!: number
  token: string = "";
  email: string = "";
  nombre: string = "";
  imagen: string = "";
  rol!: number;

  controller: string = "usuarios/"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }
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

  login(credenciales: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/"+this.controller + 'login', credenciales);
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
    this.cookie.delete('token');
    this.cookie.delete('email');
    this.cookie.delete('id');
    this.cookie.delete('rol');

    this.email = "";
    this.id = 0;
    this.token = "";
    this.rol = 0;
  }
}
