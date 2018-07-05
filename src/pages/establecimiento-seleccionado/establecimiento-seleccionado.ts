import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar,AlertController,ModalController } from 'ionic-angular';
import {PrproductoEstablecimientoProvider}from '../../providers/prproducto-establecimiento/prproducto-establecimiento';
import {PrestablecimientoProvider}from '../../providers/prestablecimiento/prestablecimiento';
import {PrrutasProvider}from '../../providers/prrutas/prrutas';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import { DomSanitizer} from '@angular/platform-browser';
import {SrvalerttoastService} from '../../services/srv-alert-toast';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
@IonicPage()
@Component({
  selector: 'page-establecimiento-seleccionado',
  templateUrl: 'establecimiento-seleccionado.html',
})
export class EstablecimientoSeleccionadoPage {
    @ViewChild(Navbar) navBar: Navbar;
	  result_id_establecimiento:any={
  		id_establecimiento:'',
  		hora:'',
  		estado:'',
  		nombre:'',
  		comision:'',
  		distancia:'',
  		imagen:'',
  		extra:''
	  };
  result_producto:any;
	result_procesar_pedido:any;
	ruta_imagen:any;
	result_tamano_producto:any;
	result_extra_producto:any;
  det_pedido:any[]=[];
  items:any;
  total:any;
  valor_item:any;
  result_det_pedido:any;
  result_det_pedido_2:any;
  result_extra_det_pedido:any;
  result_det_pedido_3:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public prproducto:PrproductoEstablecimientoProvider, public prestablecimiento:PrestablecimientoProvider, public ruta:PrrutasProvider,private _sanitizer: DomSanitizer, public pr_pedido:PrpedidoProvider, public alert_toast:SrvalerttoastService, public alertCtrl:AlertController, public modalCtrl:ModalController,public pr_direccion_entrega:PrdireccionEntregaProvider, public pr_login:PrloginProvider) {
  	this.ruta_imagen=this.ruta.get_ruta_web();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablecimientoSeleccionadoPage');
    this.get_establecimiento();
    this.setBackButtonAction();
  }
  ionViewDidEnter(){
    this.items=this.pr_pedido.get_variable_items();
    if(this.items=='') {
      this.valor_item=0;
    }else{
      this.total= this.pr_pedido.get_variable_total().toFixed(2);    
      this.valor_item=1;
    }
  }
  //Method to override the default back button action
    setBackButtonAction(){
      let det_pedido=this.pr_pedido.get_variable_pedido();
      console.log(det_pedido.length);
       this.navBar.backButtonClick = () => {
       if(det_pedido.length!=0) {
         let _titulo='Advertencia';
         let accion;
         let _mensaje='Al Salir, se borrará el pedido en curso, desea continuar?';
              let alert = this.alertCtrl.create({
              title: _titulo,
              message: _mensaje,
              buttons: [
              {
                text: 'No',
                role: 'cancel',
                handler: () => {
                  accion=0;
                }
              },
              {
                text: 'Si',
                handler: () => {
                  console.log('entra en 1');
                  let _det_pedido=this.pr_pedido.get_variable_pedido();
                  let _det_extra_pedido=this.pr_pedido.get_variable_extra_det_pedido();
                  _det_pedido.splice(0,_det_pedido.length);
                  _det_extra_pedido.splice(0,_det_extra_pedido.length);
                  console.log(_det_pedido);
                  let _item='';
                  this.pr_pedido.set_variable_items(_item);
                  this.pr_pedido.set_variable_total(_item);
                  this.pr_pedido.set_variable_pedido(_det_pedido);
                  this.pr_pedido.set_variable_extra_det_pedido(_det_extra_pedido);
                  this.navCtrl.pop();
                }
              }
              ]
              });
              alert.present();
        
       }else{
         this.navCtrl.pop();
       }
     }
    }
  get_pedido(){
    this.det_pedido=this.pr_pedido.get_variable_pedido();
  }
  modal_productos_seleccionados(){
     let modal = this.modalCtrl.create('ProductoSeleccionadoPage');
     /*si sale de la modal, actualiza el precio y los items de los productos seleccionados.*/
     modal.onDidDismiss(data => {
       this.items=this.pr_pedido.get_variable_items();
         if(this.items=='') {
           this.valor_item=0;
         }else{
           this.total= this.pr_pedido.get_variable_total().toFixed(2);    
           this.valor_item=1;
         }
    });
      modal.present();
  }
  get_establecimiento(){
  	let _result_id_establecimiento=this.prestablecimiento.get_result_id_establecimiento();
     this.result_id_establecimiento.id_establecimiento=_result_id_establecimiento.id_establecimiento;
     this.result_id_establecimiento.id_recargo=_result_id_establecimiento.id_recargo;
     this.result_id_establecimiento.hora=_result_id_establecimiento.hora_establecimiento;
     this.result_id_establecimiento.estado=_result_id_establecimiento.estado;
     this.result_id_establecimiento.nombre=_result_id_establecimiento.nombre;
     this.result_id_establecimiento.comision=_result_id_establecimiento.comision;
     this.result_id_establecimiento.distancia=_result_id_establecimiento.distancia;
     this.result_id_establecimiento.imagen=_result_id_establecimiento.imagen;
     this.result_id_establecimiento.extra=_result_id_establecimiento.extra;
     this.prestablecimiento.set_comision_establecimiento(this.result_id_establecimiento.comision);
  	this.result_producto=this.prproducto.get_result_producto_establecimiento();
  	console.log(this.result_id_establecimiento);
  	console.log(this.result_producto);
  }
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${this.ruta_imagen+image})`);
  }
  get_producto_id_producto(item){
  	console.log(item);
  	let _id_producto=item.id_producto;
  	let _extra=item.extra;
  	this.prproducto.set_result_producto_id_producto(item);
  	 this.prproducto.get_tamano_producto(_id_producto).subscribe(
  	    prproducto => {
  	      this.result_tamano_producto=prproducto;
  	       console.log("REGISTRO EXISTE");
  	       this.prproducto.set_result_tamano_id_producto(this.result_tamano_producto);
  	       /*****************************/
  	       if(_extra==1) {
				  	 this.prproducto.get_extra_id_producto(_id_producto).subscribe(
				  	    prproducto => {
				  	      this.result_extra_producto=prproducto;
				  	      this.prproducto.set_result_extra_id_producto(this.result_extra_producto);
				  	       console.log("REGISTRO EXISTE");
				  	    },
				  	    err => {console.log("NO EXISTE REGISTRO");
				  	    },
				  	  );
  					}
  	 				this.navCtrl.push('ProductoDescripcionPage');
  	       /*****************************/
  	    	},
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  	
  }
  procesar_pedido(){
    let _titulo='Procesar Pedido';
    let _mensaje='Desea Continuar?';
              let alert = this.alertCtrl.create({
              title: _titulo,
              message: _mensaje,
              buttons: [
              {
                text: 'No',
                role: 'cancel',
                handler: () => {
                  console.log('cancelo');
                  
                }
              },
              {
                text: 'Si',
                handler: () => {
                  console.log('Procesa el pedido');
                  this.procesa_pedido();
                }
              }
              ]
              });
              alert.present();

  }
  procesa_pedido(){
    let _total=this.pr_pedido.get_variable_total();
    let _total_items=this.pr_pedido.get_variable_items();
    let _id_direccion_entrega=this.pr_direccion_entrega.get_variable_id_direccion_entrega_activa();
    let _id_recargo=this.result_id_establecimiento.id_recargo;
    let _id_usuario=this.pr_login.get_id_usuario();
    let _id_pedido;
    let _id_establecimiento=this.result_id_establecimiento.id_establecimiento;
    let item_alert='Espere por favor';
    this.alert_toast.show_loading(item_alert);
     this.pr_pedido.procesar_pedido(_id_establecimiento,_id_usuario,_id_direccion_entrega,_id_recargo,_total_items,_total).subscribe(
      pr_pedido => {
        this.result_procesar_pedido=pr_pedido;
         console.log("se procesa el pedido");
         /*toma el id que me lo esta enviando desde el controller de pedidos*/
        _id_pedido=this.result_procesar_pedido;
        this.pr_pedido.set_id_pedido(_id_pedido);
        this.get_pedido_id_pedido(_id_pedido);
        this.procesa_det_pedido(_id_pedido);
      },
      err => {console.log("NO EXISTE REGISTRO");
      },
      );
  }
  procesa_det_pedido(item){
    let _id_pedido=item;
    let _det_pedido=this.pr_pedido.get_variable_pedido();
    let i=0;
     for(let value of _det_pedido) {
        let id_pedido=_id_pedido;
       let id_producto=value.id_producto;
       let nombre=value.nombre;
       let cantidad=value.cantidad;
       let total=value.total;
        this.pr_pedido.guardar_det_pedido(id_pedido,id_producto,nombre,cantidad,total).subscribe(
           pr_pedido => {
             this.result_det_pedido=pr_pedido;
             i++;
              console.log("se guarda el detalle de pedido ", i);
               console.log(i);
                 if(i==_det_pedido.length) {
                 this.procesar_extra_pedido(_id_pedido);
                 } 
           },
           err => {console.log("NO EXISTE REGISTRO");
           },
         ); 
      } 
  }
  procesar_extra_pedido(item){
    let _id_pedido=item;
   
    let _det_extra_pedido=this.pr_pedido.get_variable_extra_det_pedido();
    if(_det_extra_pedido.length==0) {
       this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(
          pr_pedido => {
            this.result_det_pedido_2=pr_pedido;
             this.pr_pedido.set_det_pedido_procesado(this.result_det_pedido_2);
             console.log("registro det pedido");
               this.alert_toast.dismis_loading();
             this.navCtrl.push('PedidoProcesadoPage');
         
          },
          err => {console.log("NO EXISTE REGISTRO");
          },
        );
    }else{
       this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(
        pr_pedido => {
          this.result_det_pedido_2=pr_pedido;
          this.pr_pedido.set_det_pedido_procesado(this.result_det_pedido_2);
           console.log("REGISTRO det_pedido");
            for(let value of this.result_det_pedido_2) {
             let _id_det_pedido=value.id;
             let id_producto=value.id_producto;
              for(let value_2 of _det_extra_pedido) {
               let _id_producto_extra=value_2.id_producto;
               let _id_extra=value_2.id_extra;
               if(_id_producto_extra==id_producto) {
                  this.pr_pedido.guardar_extra_det_pedido(_id_pedido,_id_det_pedido,_id_extra).subscribe(
                     pr_pedido => {
                       this.result_extra_det_pedido=pr_pedido;
                        console.log("guarda el extra del producto");
                        this.alert_toast.dismis_loading();
                        this.navCtrl.push('PedidoProcesadoPage');
                     },
                     err => {console.log("NO EXISTE REGISTRO");
                     },
                   );
               }
              }
            }
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
        );
    }
  }
  get_pedido_id_pedido(item){
    let _id_pedido=item;
    console.log('entraq en get_pedido_id_pedido');
    this.pr_pedido.get_pedido_id_pedido(_id_pedido).subscribe(
      pr_pedido => {
       this.result_det_pedido_3=pr_pedido;
       console.log(this.result_det_pedido_3);
       this.pr_pedido.set_pedido_procesado(this.result_det_pedido_3);
      },
      err => {console.log("NO EXISTE REGISTRO");
      },
    );
  }

}
