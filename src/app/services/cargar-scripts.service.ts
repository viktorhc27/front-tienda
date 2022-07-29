import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }
  Carga(archivos: string[]) {
    for (let archivo of archivos) {
      let script = document.createElement('script');
      script.src = "./assets/js/" + archivo + ".js";
      let etiqueta = document.getElementsByTagName("body")[0]
      etiqueta.appendChild(script);

    }
  }
}
