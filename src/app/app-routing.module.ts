import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaPedidosComponent} from './pedidos/lista-pedidos/lista-pedidos.component';


const routes: Routes = [
  {
    path: 'pedidos',
    component: ListaPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
