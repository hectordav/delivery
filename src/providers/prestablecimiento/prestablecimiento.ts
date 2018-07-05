import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';


@Injectable()
export class PrestablecimientoProvider {
	principal_url:string;
	result_id_establecimiento:any;
  comision_establecimiento:any;
  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
  	this.principal_url=this.ruta.get_ruta();
  }
  set_comision_establecimiento(value){
    this.comision_establecimiento=value;
  }
  get_comision_establecimiento(){
    return this.comision_establecimiento;
  }
  set_result_id_establecimiento(value){
  	this.result_id_establecimiento=value;
  }
  get_result_id_establecimiento(){
  	return this.result_id_establecimiento;
  }
 

}
