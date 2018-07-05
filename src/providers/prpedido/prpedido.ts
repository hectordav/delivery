import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrrutasProvider } from '../../providers/prrutas/prrutas';
import { Http } from '@angular/http';

@Injectable()
export class PrpedidoProvider {
  principal_url:string;
  variable_det_pedido:any[]=[];
	variable_extra_det_pedido:any[]=[];
  variable_items:any=0;
  variable_total:any=0;
  pedido_procesado:any;
  id_pedido:any;
  det_pedido_procesado:any;
  id_hora_entrega:any;
  id_metodo_pago:any;
  total:any;
  result_pedido:any;
  result_det_pedido:any;
  result_extra_pedido:any;
  variable_extra_pedido:any;
  varibale_token_repartidor:any;
  variable_status_pedido:any;
  token_repartidor_pedido_seleccionado:any;
  token_empresa_pedido_seleccionado:any;
  variable_token_empresa:any;
  constructor(public http: HttpClient,public http_2:Http, public ruta:PrrutasProvider) {
    this.principal_url=this.ruta.get_ruta();
  }
  set_result_pedido(value){
    this.result_pedido=value;
  }
  get_result_pedido(){
    return this.result_pedido;
  }
  set_result_det_pedido(value){
    this.result_det_pedido=value;
  }
  get_result_det_pedido(){
    return this.result_det_pedido;
  }
  set_result_extra_pedido(value){
    this.result_extra_pedido=value;
  }
  get_result_extra_pedido(){
    return this.result_extra_pedido;
  }
  set_variable_extra_pedido(value){
    this.variable_extra_pedido=value;
  }
  get_variable_extra_pedido(){
    return this.variable_extra_pedido;
  }
  set_varibale_token_repartidor(value){
    this.varibale_token_repartidor=value;
  }
  get_varibale_token_repartidor(){
    return this.varibale_token_repartidor;
  }
  set_variable_status_pedido(value){
    this.variable_status_pedido=value;
  }
  get_variable_status_pedido(){
    return this.variable_status_pedido;
  }
  set_total(value){
    this.total=value;
  }
  get_total(){
    return this.total;
  }
  set_id_metodo_pago(value){
    this.id_metodo_pago=value;
  }
  get_id_metodo_pago(){
    return this.id_metodo_pago;
  }
  set_id_hora_entrega(value){
    this.id_hora_entrega=value;
  }
  get_id_hora_entrega(){
    return this.id_hora_entrega;
  }

  set_pedido_procesado(value){
    this.pedido_procesado=value;
  }
  get_pedido_procesado(){
    return this.pedido_procesado;
  }
  set_id_pedido(value){
    this.id_pedido=value;
  }
  get_id_pedido(){
    return this.id_pedido;
  }
  set_det_pedido_procesado(value){
  	this.det_pedido_procesado=value;
  }
  get_det_pedido_procesado(){
  	return this.det_pedido_procesado;
  }
   set_variable_pedido(value){
    this.variable_det_pedido=value;
  }
  get_variable_pedido(){
    return this.variable_det_pedido;
  }
  set_variable_extra_det_pedido(value){
    this.variable_extra_det_pedido=value;
  }
  get_variable_extra_det_pedido(){
    return this.variable_extra_det_pedido;
  }
  set_variable_items(value){
    this.variable_items=value;
  }
  get_variable_items(){
    return this.variable_items;
  }
  set_variable_total(value){
    this.variable_total=value;
  }
  get_variable_total(){
    return this.variable_total;
  }
  set_token_repartidor_pedido_seleccionado(value){
    this.token_repartidor_pedido_seleccionado=value;
  }
  get_token_repartidor_pedido_seleccionado(){
    return this.token_repartidor_pedido_seleccionado;
  }
  set_token_empresa_pedido_seleccionado(value){
    this.token_empresa_pedido_seleccionado=value;
  }
  get_token_empresa_pedido_seleccionado(){
    return this.token_empresa_pedido_seleccionado;
  }
  set_variable_token_empresa(value){
    this.variable_token_empresa=value;
  }
  get_variable_token_empresa(){
    return this.variable_token_empresa;
  }
  procesar_pedido(_id_establecimiento,_id_usuario,_id_direccion_entrega,_id_recargo,_total_item,_total_pedido){
    var variable_2=JSON.stringify({id_establecimiento:_id_establecimiento,id_usuario:_id_usuario,id_direccion_entrega:_id_direccion_entrega,id_recargo:_id_recargo,total_item:_total_item,total_pedido:_total_pedido});
    var url = this.principal_url+'pedido/procesar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  guardar_det_pedido(id_pedido,id_producto,descripcion,cantidad,total){
    var variable_2=JSON.stringify({id_pedido:id_pedido,id_producto:id_producto,descripcion:descripcion,cantidad:cantidad,total:total});
    var url = this.principal_url+'pedido/guardar_det_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response; 
  }
  get_det_pedido_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_det_pedido_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  get_pedido_id_usuario(datos){
    var variable_2=JSON.stringify(datos);
    var url = this.principal_url+'pedido/get_pedido_id_usuario';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  guardar_extra_det_pedido(_id_pedido,_id_det_pedido,_id_extra){
    var variable_2=JSON.stringify({id_pedido:_id_pedido,id_det_pedido:_id_det_pedido,id_extra:_id_extra});
    var url = this.principal_url+'pedido/guardar_extra_det_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
   }
   get_pedido_id_pedido(_id_pedido){
       var variable_2=JSON.stringify({id_pedido:_id_pedido});
       var url = this.principal_url+'pedido/get_pedido_id_pedido';
       /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
       var response = this.http.post(url,variable_2);
       return response;
   }
  eliminar_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/eliminar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  actualizar_pedido(_id_pedido,_id_hora_entrega,_id_metodo_pago){
   var variable_2=JSON.stringify({id_pedido:_id_pedido, id_hora_entrega:_id_hora_entrega, id_metodo_pago:_id_metodo_pago});
    var url = this.principal_url+'pedido/actualizar_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http.post(url,variable_2);
    return response;
  }
  contar_pedido(_id_usuario){
      var variable_2=JSON.stringify({id_usuario:_id_usuario});
      var url = this.principal_url+'pedido/contar_pedido';
      /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
      var response = this.http.post(url,variable_2);
      return response;
  }
  get_extra_det_pedido_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_extra_det_pedido_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_token_usuario_repartidor_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_token_usuario_repartidor_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  get_token_usuario_empresa_id_pedido(_id_pedido){
    var variable_2=JSON.stringify({id_pedido:_id_pedido});
    var url = this.principal_url+'pedido/get_token_usuario_empresa_id_pedido';
    /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
    var response = this.http_2.post(url,variable_2).map(res => res.json());
    return response;
  }
  guardar_calificacion(datos){
      var variable_2=JSON.stringify(datos);
      var url = this.principal_url+'pedido/guardar_calificacion';
      var response = this.http_2.post(url,variable_2).map(res => res.json());
      return response;
    }
}
