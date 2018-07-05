import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';


@Injectable()
export class PrrubroProvider {
		principal_url:string;
		variable_rubro_establecimiento:any;

  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
    console.log('rubro provider');
  }
  set_rubro_establecimiento(value) {
    this.variable_rubro_establecimiento = value;
  }
  get_rubro_establecimiento() {
    return this.variable_rubro_establecimiento;
  }
  get_rubro(){
      var variable_2=JSON.stringify({id_cliente:1});
    	var url = this.principal_url+'rubro/get_rubro';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
  }
  get_establecimientos_id_rubro(id_rubro){
  	var variable_2=JSON.stringify({id_rubro:id_rubro});
    	var url = this.principal_url+'rubro/get_establecimientos_id_rubro';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;	
  }

}
