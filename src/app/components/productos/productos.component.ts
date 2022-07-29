import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service'
import { ConfigService } from 'src/app/utils/config.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {
  productos: Array<any> = [];
  page: number = 1;
  urlBase = 'http://localhost:3000/'
  searchTerm = '';
  term = '';
  constructor(
    private _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.index()
  }

  index(): void {
    this._productosService.index().subscribe((result) => {
      for (let i = 0; i < result.data.length; i++) {
        this.productos.push(result.data[i])
      }
      console.log(this.productos)

    })
  }



}
