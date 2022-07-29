import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  recarga: number = 0
  cart: any = []
  total: number = 0
  subscription!: Subscription;
  qty: number = 0
  public form: FormGroup
  constructor(

    private formBuilder: FormBuilder,
    private service: CartService
  ) {

    this.form = this.formBuilder.group({
      id: [''],
      cant: ['']
    })
  }

  ngOnInit(): void {
    this.list_cart()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  list_cart() {
    this.cart = []
    this.cart = JSON.parse(localStorage.getItem("cart") as string)
    //suma TOTAL de los precios en carrito
    this.total = 0
    this.cart.forEach((res: any) => {
      this.total = this.total + res.total

    })
  }
  eliminar_prod(id: number) {
    console.log(JSON.parse(localStorage.getItem("cart") as string))
    this.service.eliminar_prod(id, JSON.parse(localStorage.getItem("cart") as string)).subscribe((res: any) => {
      localStorage.setItem("cart", JSON.stringify(res.cart));
      this.ngOnInit()
    })

  }

  descontar(id: number) {
    this.service.descontar_prod(id, JSON.parse(localStorage.getItem("cart") as string)).subscribe((res: any) => {
      localStorage.setItem("cart", JSON.stringify(res.cart));
      this.ngOnInit()
    })
  }

  aumentar(id: number) {
    console.log("aumentar")
    this.service.aumentar_prod(id, JSON.parse(localStorage.getItem("cart") as string)).subscribe((res: any) => {
      localStorage.setItem("cart", JSON.stringify(res.cart));
      this.ngOnInit()
    })
  }


}
