import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal: any;
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  list: any
  constructor() { }

  ngOnInit(): void {
    paypal.Buttons().render(this.paypalElement.nativeElement)
    this.list = JSON.parse(localStorage.getItem("cart") as string)
    console.log(this.list);

  }

}
