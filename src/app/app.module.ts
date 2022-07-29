import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//pagination
import { NgxPaginationModule } from 'ngx-pagination';

//services
import { CargarScriptsService } from './services/cargar-scripts.service'
//formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DetallesComponent } from './components/detalles/detalles.component';
import { CartComponent } from './components/cart/cart.component';
import { RecargaDirective } from './directives/recarga.directive';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductosComponent,
    FooterComponent,
    DetallesComponent,
    CartComponent,
    RecargaDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
