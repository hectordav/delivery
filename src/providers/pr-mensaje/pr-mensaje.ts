import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';


@Injectable()
export class PrMensajeProvider {
	principal_url:string;
  constructor(public http: HttpClient, public ruta:PrrutasProvider) {
  	this.principal_url=this.ruta.get_ruta();
  }
   enviar_mensaje_empresa(_token_usuario,_id_pedido,_mensaje){
    var variable_2=JSON.stringify({token:_token_usuario,id_pedido:_id_pedido, mensaje:_mensaje});
   	var url = this.principal_url+'push_establecimiento/enviar_mensaje_establecimiento_cliente';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }

}
