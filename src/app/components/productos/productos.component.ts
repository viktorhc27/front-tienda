import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos/productos.service'
import { ConfigService } from 'src/app/utils/config.service';
import { debounceTime, finalize, map, switchMap, tap } from 'rxjs/operators';
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

  public isLoading = false;
  public src!: string;
  public data$: any;
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
     // console.log(this.productos)

    })
  }
  search(value: any): any {
    this.isLoading = true;

    this.data$ = this._productosService.searchTrack({ q: value })
      .pipe(
        map(({ productos }) => productos),
        finalize(() => this.isLoading = false)
      )

  }


}
