import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrhoraEntregaProvider {
	principal_url:string;
	variable_result_hora_entrega:any;

  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
  }
	set_variable_result_hora_entrega(value){
		this.variable_result_hora_entrega=value;
  }
  get_variable_result_hora_entrega(){
		return this.variable_result_hora_entrega;
  }
  
  get_hora_entrega(){
      var variable_2=JSON.stringify({id_cliente:1});
    	var url = this.principal_url+'hora_entrega/get_hora_entrega';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
    }

}
