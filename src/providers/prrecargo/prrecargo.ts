import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrrecargoProvider {
	principal_url:string;
	variable_recargo:any;
  variable_comision_asignada:any;

  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
    console.log('Hello PrrecargoProvider Provider');
  }
  set_result_recargo(value) {
    this.variable_recargo = value;
  }
  get_result_recargo() {
    return this.variable_recargo;
  }
  set_comision_asignada(value) {
    this.variable_comision_asignada = value;
  }
  get_comision_asignada() {
    return this.variable_comision_asignada;
  }
  get_recargo(){
      var variable_2=JSON.stringify({id_cliente:1});
    	var url = this.principal_url+'recargo/get_recargo';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
    }

}
