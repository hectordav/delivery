import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrpushEstablecimientoProvider {
	principal_url:string;

  constructor(public http: HttpClient, public ruta:PrrutasProvider) {
   	this.principal_url=this.ruta.get_ruta();
  }
  push_nuevo_pedido(id_establecimiento){
      var variable_2=JSON.stringify({id_establecimiento:id_establecimiento});
    	var url = this.principal_url+'push_establecimiento/push_nuevo_pedido';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
    }

}
