import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:producto', component: DetallesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'pagos', component: PagosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
