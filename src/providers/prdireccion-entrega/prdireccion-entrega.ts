import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';
import { Http } from '@angular/http';

@Injectable()
export class PrdireccionEntregaProvider {
		principal_url:string;
	  variable_result:any;
    variable_result_direccion_entrega_todas:any;
    variable_id_direccion_entrega:any;
    variable_mapa:any;
    
  constructor(public http: HttpClient, public ruta:PrrutasProvider, public http_2:Http) {
    console.log('Hello PrtiempoEntregaProvider Provider');
		this.principal_url=this.ruta.get_ruta();
  }
  set_variable_mapa(value){
    this.variable_mapa=value;
  }
  get_variable_mapa(){
    return this.variable_mapa;
  }
  set_variable_result_direccion_entrega_todas(value){
    this.variable_result_direccion_entrega_todas=value;
  }
  get_variable_result_direccion_entrega_todas(){
    return this.variable_result_direccion_entrega_todas;
  }
  set_variable_direccion_entrega(value){
  	this.variable_result=value;
  }
  get_variable_direccion_entrega_activa(){
  	return this.variable_result;
  }
   set_variable_id_direccion_entrega(value){
    this.variable_id_direccion_entrega=value;
  }
  get_variable_id_direccion_entrega_activa(){
    return this.variable_id_direccion_entrega;
  }
  get_direccion_entrega(id_usuario){
    var variable_2=JSON.stringify({id_usuario:id_usuario});
  	var url = this.principal_url+'direccion_entrega/get_direccion_entrega';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
   get_direccion_entrega_activo(id_usuario){
    var variable_2=JSON.stringify({id_usuario:id_usuario});
    var url = this.principal_url+'direccion_entrega/get_direccion_entrega_activo';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  guardar_direccion_entrega(id_usuario,lat_lng,direccion,det_direccion){
    var variable_2=JSON.stringify({id_usuario:id_usuario,lat_lng:lat_lng,direccion:direccion,det_direccion:det_direccion});
  	var url = this.principal_url+'direccion_entrega/guardar_direccion_entrega';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2)
    return response;
  }
  activar_direccion_entrega(_id_usuario,_id_direccion_entrega){
   var variable_2=JSON.stringify({id_usuario:_id_usuario,id_direccion_entrega:_id_direccion_entrega});
    var url = this.principal_url+'direccion_entrega/activar_direccion_entrega';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2)
    return response; 
  }
  eliminar_direccion_entrega(_id_direccion_entrega){
   var variable_2=JSON.stringify({id_direccion_entrega:_id_direccion_entrega});
    var url = this.principal_url+'direccion_entrega/eliminar_direccion_entrega';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2)
    return response; 
  }

}
