import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service'
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/models/cart'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  providers: [ProductosService, CargarScriptsService, CartService]
})
export class DetallesComponent implements OnInit {

  private producto: String | undefined
  public info: Array<any> = []
  public urlBase = 'http://localhost:3000/'
  public carrito: Array<Cart> = []
  public form: FormGroup


  constructor(
    private _route: ActivatedRoute,
    private _service: ProductosService,
    private _CargarScripts: CargarScriptsService,
    private _Carrito: CartService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      quantity: ['']
    })
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.producto = params['producto'];
      this._service.detalles(this.producto).subscribe((res: any) => {
        this.info.push(res.datos);
      })
    });
    this._CargarScripts.Carga(['flex-slider'])
    this._CargarScripts.Carga(['qty'])
  }

  add_carrito() {

    console.log(this.form.value.quantity);

    for (let i = 0; i < this.info.length; i++) {
      this.carrito.push(new Cart(this.info[i].id, this.info[i].nombre/* , this.info[i].Imagenes[0].nombre */, this.form.value.quantity, this.info[i].p_venta))

      if (localStorage.getItem("cart") != null) {
        this._Carrito.add_carrito(this.carrito, JSON.parse(localStorage.getItem('cart') as string)).subscribe(result => {
          localStorage.setItem('cart', JSON.stringify(result.cart))

        });
      } else {
        let cart: any = [];
        this._Carrito.add_carrito(this.carrito, cart).subscribe(result => {
          localStorage.setItem('cart', JSON.stringify(result.cart))
        });
      }
      this.carrito.splice(0, 1)


    }

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Producto Agregado a Carrito'
    })

    // console.log(this.carrito)
  }


}
