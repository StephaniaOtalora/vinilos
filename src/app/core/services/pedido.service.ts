import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pedido} from './../../pedidos/pedido';
import { Observable } from 'rxjs';

const API_URL = '';
const API_JSON = './../../../assets/pedidos.json';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPedidos(): Observable<Pedido []>{
    return this.httpClient.get<Pedido[]>(API_JSON);
  }
}
