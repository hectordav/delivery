import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';


@Injectable()
export class PrproductoEstablecimientoProvider {
	principal_url:string;
	result_producto_establecimiento:any;
	result_producto_id_producto:any;
	result_extra_id_producto:any;
	result_tamano_id_producto:any;
  variable_id_producto:any;

  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
  	  this.principal_url=this.ruta.get_ruta();
  }
  set_result_tamano_id_producto(value) {
    this.result_tamano_id_producto = value;
  }
  get_result_tamano_id_producto() {
    return this.result_tamano_id_producto;
  }
  set_variable_id_producto(value) {
    this.variable_id_producto = value;
  }
  get_variable_id_producto() {
    return this.variable_id_producto;
  }
  set_result_extra_id_producto(value) {
    this.result_extra_id_producto = value;
  }
  get_result_extra_id_producto() {
    return this.result_extra_id_producto;
  }
	set_result_producto_id_producto(value) {
		this.result_producto_id_producto = value;
	}
	get_result_producto_id_producto() {
		return this.result_producto_id_producto;
	}
  set_result_producto_establecimiento(value) {
    this.result_producto_establecimiento = value;
  }
  get_result_producto_establecimiento() {
    return this.result_producto_establecimiento;
  }
  get_producto_id_establecimiento(id_establecimiento){
      var variable_2=JSON.stringify({id_establecimiento:id_establecimiento});
    	var url = this.principal_url+'producto_establecimiento/get_producto_id_establecimiento';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
  }
  get_tamano_producto(id_producto){
      var variable_2=JSON.stringify({id_producto:id_producto});
    	var url = this.principal_url+'producto_establecimiento/get_tamano_producto';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
  }
  get_extra_id_producto(id_producto){
      var variable_2=JSON.stringify({id_producto:id_producto});
    	var url = this.principal_url+'extra/get_extra_id_producto';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
    }


}
