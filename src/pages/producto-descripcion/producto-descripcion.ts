import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar,ModalController } from 'ionic-angular';
import {PrproductoEstablecimientoProvider}from '../../providers/prproducto-establecimiento/prproducto-establecimiento';
import {PrrutasProvider}from '../../providers/prrutas/prrutas';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';

@IonicPage()
@Component({
  selector: 'page-producto-descripcion',
  templateUrl: 'producto-descripcion.html',
})
export class ProductoDescripcionPage {
   @ViewChild(Navbar) navBar: Navbar;
	result_producto:any={
		id_producto:'',
		nombre:'',
		descripcion:'',
		precio:'',
		extra:'',
		imagen:''
	};
	det_pedido:any[]=[];

	result_tamano:any;
	ruta_imagen:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_producto:PrproductoEstablecimientoProvider, public ruta:PrrutasProvider, public pr_pedido:PrpedidoProvider,public modalctrl:ModalController) {
  	this.ruta_imagen=this.ruta.get_ruta_web();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDescripcionPage');
    this.get_producto();
    this.get_pedido();
  }
  get_producto(){
  	let _result_producto=this.pr_producto.get_result_producto_id_producto();
  	console.log(_result_producto);
  	this.result_tamano=this.pr_producto.get_result_tamano_id_producto();
		this.result_producto.id_producto=_result_producto.id_producto;
		this.result_producto.nombre=_result_producto.nombre_producto;
		this.result_producto.descripcion=_result_producto.descripcion_producto;
		this.result_producto.precio=_result_producto.precio;
		this.result_producto.extra=_result_producto.extra;
		this.result_producto.imagen=_result_producto.imagen;
  }
  get_pedido(){
  	this.det_pedido=this.pr_pedido.get_variable_pedido();
  }
  agregar_det_pedido(item){
  	let det_pedido=this.det_pedido;
  	console.log(item);
  	console.log(det_pedido);
    let j =0;
    let _cantidad;
    if(det_pedido==[]) {
    }else{
      /**/
      /*el item del producto*/
    let _id_producto_item=item.id_producto;
    /**/
    let _id_det_pedido=this.det_pedido;
    let i=0;
  	 for(let value of _id_det_pedido) {
  		let _id_producto=value.id_producto;
  		_cantidad=value.cantidad;
  		if(_id_producto==_id_producto_item){
          this.det_pedido.splice(i, 1);
  				console.log('lo resta');
          j=1;
  		}
      i++;
  		
  	 }
     /*lo suma*/
    }  
    if(j==0) {
      this.det_pedido.push({
        /*si no existe el producto del for lo suma*/
        id_producto: item.id_producto, 
        nombre: item.nombre,
        cantidad: 1, 
        total:item.precio
      });
    }else{
      _cantidad=_cantidad+1;
      /*si existe en el for lo resta y luego lo suma con cantidad 2*/
      this.det_pedido.push({
        id_producto: item.id_producto, 
        nombre: item.nombre,
        cantidad: _cantidad,
        total:item.precio*_cantidad 
      });
    }
  		/**/
      this.pr_pedido.set_variable_pedido(this.det_pedido);
  		this.det_pedido=this.pr_pedido.get_variable_pedido();
      console.log(this.det_pedido);
      this.sumar_total();
  }
  sumar_total(){
    let _det_pedido=this.det_pedido;
    let _cantidad_productos:any=0;
    let _total_productos:any=0;
     for(let value of _det_pedido) {
      _cantidad_productos=_cantidad_productos+value.cantidad;
      _total_productos=_total_productos+parseInt(value.total);
     }
     this.pr_pedido.set_variable_items(_cantidad_productos);
     this.pr_pedido.set_variable_total(_total_productos);
     let extra=this.result_producto.extra;
     console.log(extra);
      if(extra==0 || extra== null) {
        this.navCtrl.pop();
      }else{
        this.pr_producto.set_variable_id_producto(this.result_producto.id_producto);
           let modal = this.modalctrl.create('ProductoExtraPage');
             modal.onDidDismiss(data => {
             this.navCtrl.pop();
             });
      modal.present();
      }
  }
}
