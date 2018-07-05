import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';

@Injectable()
export class PrloginProvider {
	principal_url:string;
	variable_token: any;
  variable_serial: any;
  variable_inicio_sesion:any;
  variable_id_usuario:any;
  lat_home:any;
  lng_home:any;
  new_lat_lng_home:any;
  lat:any;
  lng:any;
  constructor(public http: HttpClient,public ruta:PrrutasProvider) {
  	this.principal_url=this.ruta.get_ruta();
    console.log(this.principal_url);
  }
  setMylat(value) {
    this.lat = value;
  }
  getMylat() {
    return this.lat;
  }
  setMylng(value) {
    this.lng = value;
  }
  /*obtengo la variable global para enviarla a los controlers*/
  getMylng() {
    return this.lng;
  }
  set_new_lat_lng_home(value) {
    this.new_lat_lng_home = value;
  }
 get_new_lat_lng_home() {
    return this.new_lat_lng_home;
  }
  setMylat_home(value) {
    this.lat_home = value;
  }
  getMylat_home() {
    return this.lat_home;
  }
  setMylng_home(value) {
    this.lng_home = value;
  }
  /*obtengo la variable global para enviarla a los controlers*/
  getMylng_home() {
    return this.lng_home;
  }
    /*el serial*/
  set_serial(value) {
    this.variable_serial = value;
  }
  /*obtengo el serial*/
  get_serial() {
    return this.variable_serial;
  }
  set_inicio_sesion(value) {
    this.variable_inicio_sesion = value;
  }
  get_inicio_sesion() {
    return this.variable_inicio_sesion;
  }
  set_id_usuario(value) {
    this.variable_id_usuario = value;
  }
  get_id_usuario() {
    return this.variable_id_usuario;
  }
  /*el token del push*/
  setToken(value) {
    this.variable_token = value;
  }
  /*obtengo el push y lo comparo con el guardado */
  getToken() {
    return this.variable_token;
  }
  login_manual(login,clave,token,serial){
    var variable_2=JSON.stringify({login:login,clave:clave,token:token,serial:serial});
    var url = this.principal_url+'login/login_manual';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }

}
