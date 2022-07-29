import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from 'src/app/utils/config.service';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _refresh$ = new Subject<void>();
  controller: string = "productos/"

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }
  get refresh$() {
    return this._refresh$;
  }
  //agregar a Carrito
  add_carrito(product: any, carrito: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/" + this.controller + '/add-cart/', { product, cart: carrito })
  }

  eliminar_prod(id: number, carrito: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/" + this.controller + "/delete-cart", { id: id, carrito: carrito })
  }

  descontar_prod(id: number, carrito: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/" + this.controller + "/subtract-product", { id: id, cart: carrito })
  }

  aumentar_prod(id: number, carrito: any): Observable<any> {
    return this.http.post(this.config.urlBase + "/" + this.controller + "/add-product", { id: id, cart: carrito })
  }
}
