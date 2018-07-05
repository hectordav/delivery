import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import {PrproductoEstablecimientoProvider}from '../../providers/prproducto-establecimiento/prproducto-establecimiento';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';


@IonicPage()
@Component({
  selector: 'page-producto-extra',
  templateUrl: 'producto-extra.html',
})
export class ProductoExtraPage {
	result_extra_producto:any;
	item_2:any[]=[];
	det_extra:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public pr_producto:PrproductoEstablecimientoProvider, public pr_pedido:PrpedidoProvider,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoExtraPage');
    this.get_extra();
  }
  get_extra(){
  	console.log('entra en extra');
  	this.result_extra_producto=this.pr_producto.get_result_extra_id_producto();

  	console.log(this.result_extra_producto);
  }
  agregar_extra(){
  	let result_extra=this.pr_producto.get_result_extra_id_producto();
    this.det_extra=this.pr_pedido.get_variable_extra_det_pedido();
    console.log(this.det_extra);
  	 for(let value of result_extra){
  		console.log(this.item_2[value.id]);
      /*si el check es true crea el push del array*/
  		if(this.item_2[value.id]==true){
  			let id_producto=this.pr_producto.get_variable_id_producto();
  			let id_extra=value.id;
  			 this.det_extra.push({
        /*si no existe el producto del for lo suma*/
        id_extra:id_extra,
        id_producto: id_producto, 
        total:value.precio
      });
  		}
      this.pr_pedido.set_variable_extra_det_pedido(this.det_extra);
  	 }
     this.sumar_total_extra_con_det_pedido();

  }
sumar_total_extra_con_det_pedido(){
  let _det_extra=this.det_extra;
  let _total_extra:any=0;
    for(let value of _det_extra) {
    _total_extra=_total_extra+parseInt(value.total);
    }
  /*tomo el total del pedido y le sumo el extra incluido*/
  let total_det_pedido=this.pr_pedido.get_variable_total()+_total_extra;
  this.pr_pedido.set_variable_total(total_det_pedido);
   this.viewCtrl.dismiss();
  }
 cerrar(){
   this.viewCtrl.dismiss();
 }
}
