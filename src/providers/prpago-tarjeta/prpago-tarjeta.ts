import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrpagoTarjetaProvider {
	principal_url:string;
  
  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
  }
  get_pago_tarjeta(){
      var variable_2=JSON.stringify({id_cliente:1});
    	var url = this.principal_url+'pago_tarjeta/get_pago_tarjeta';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
  }
  enviar_pago_tarjeta(envio_datos){
    var variable_2=JSON.stringify({envio_datos:envio_datos});
  	var url = this.principal_url+'Pago_tarjeta/enviar_pago_tarjeta';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
    }

}
