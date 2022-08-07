import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [SesionService]
})
export class HeaderComponent implements OnInit {
  cart: Array<Cart> = []
  c: any
  contador: number = 0
  public user!: User[]
  constructor(private _sesion: SesionService, private router: Router) { }

  ngOnInit(): void {
    this.iniciar_cart();
    this.verificar_login();
    console.log(this.user);

  }

  iniciar_cart() {
    this.c = localStorage.getItem('cart')
    if (this.c == null) {
      localStorage.setItem("cart", "[]");
      this.contador = 0;
    }
    this.contador = (JSON.parse(localStorage.getItem('cart') as string)).length;
  }
  verificar_login() {
    let id = parseInt(localStorage.getItem('id') as string);
    let email = localStorage.getItem('email') as string;
    let token = localStorage.getItem('token') as string;
    let rol = parseInt(localStorage.getItem('rol') as string);
    this.user = [
      new User(id, email, token, rol)
    ]
  }
  cerrar() {
    this._sesion.clearSesion()
    this.user.splice(0)
    console.log("cerrar")

  }

}
