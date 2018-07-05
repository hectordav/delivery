import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrregistroProvider {
	principal_url:string;

  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
  }
  guardar_usuario(curp,nombre,direccion,correo,pass,telf,token,serial,id_nivel){
    var variable_2=JSON.stringify({curp:curp,nombre:nombre,direccion:direccion,correo:correo,pass:pass,telf:telf,token:token,serial:serial,id_nivel:id_nivel});
  	var url = this.principal_url+'registro/guardar_usuario';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
    }

}
