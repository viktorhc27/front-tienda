import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CargarScriptsService]
})
export class HomeComponent implements OnInit {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.Carga(["owl"])
  }

  ngOnInit(): void {
    
  }

}
