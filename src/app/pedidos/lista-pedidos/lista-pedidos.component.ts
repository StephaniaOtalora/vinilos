import { Component, OnInit } from '@angular/core';
import { Pedido} from './../pedido';
import { PedidoService } from './../../core/services/pedido.service';
@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Pedido [];
  constructor(
    private pedidoService: PedidoService
   ) { }

  ngOnInit() {
    this.pedidoService.getPedidos()
    .subscribe(respuesta => {
      this.pedidos = respuesta;
    });
  }

}
