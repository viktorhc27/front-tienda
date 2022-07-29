import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConfigService } from 'src/app/utils/config.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  controller: string = "productos/"

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  index(): Observable<any> {
    return this.http.get(this.config.urlBase + "/" + this.controller + 'index')
  }
  detalles(element: any): Observable<any> {
    return this.http.get(this.config.urlBase + "/" + this.controller + "detalles/" + element)
  }

  searchTrack({ q }: ProductModel): Observable<any> {
    return this.http.get(this.config.urlBase + "/" + this.controller + 'search/' + q+'/'+10)
  }

}
export class ProductModel {
  q!: string;
}
