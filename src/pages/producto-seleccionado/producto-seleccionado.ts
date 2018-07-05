import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController,AlertController  } from 'ionic-angular';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import {SrvalerttoastService} from '../../services/srv-alert-toast';

@IonicPage()
@Component({
  selector: 'page-producto-seleccionado',
  templateUrl: 'producto-seleccionado.html',
})
export class ProductoSeleccionadoPage {
  cantidad_borrar:any;
	result_producto_seleccionado;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pedido:PrpedidoProvider, public modalctrl:ModalController, public viewCtrl: ViewController, public alertCtrl:AlertController, public alert_toast:SrvalerttoastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoSeleccionadoPage');
    this.productos_seleccionados();
  }
  productos_seleccionados(){
  	this.result_producto_seleccionado=this.pedido.get_variable_pedido();
  }
  cerrar(){
  	 this.viewCtrl.dismiss();
  }
  borrar_item(item){
    let _id_producto_item=item.id_producto;
    let _cantidad=item.cantidad;

     let prompt = this.alertCtrl.create({
      title: 'Borrar Producto',
      message: "Ingrese la cantidad a borrar",
      inputs: [
        {
          name: 'txt_borrar',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Borrar',
          handler: data => {
           let _cantidad_borrar=data.txt_borrar;
           console.log(_cantidad_borrar);
           
           let _cantidad_entero=parseInt(_cantidad_borrar);
           if(_cantidad_entero>_cantidad) {
             let _mensaje="Esta ingresando una cantidad mayor a la registrada";
             this.alert_toast.loading_toast(_mensaje);
           }else{
             let _cantidad_nueva=_cantidad-_cantidad_borrar;
             let _total_producto=item.total/_cantidad;
             let _total=_total_producto*_cantidad_nueva;
             let det_pedido=this.pedido.get_variable_pedido();
             let i=0;
             let _cantidad_registrada;
             for(let value of det_pedido) {
             let _id_producto=value.id_producto;
               _cantidad_registrada=value.cantidad;
               if(_id_producto==_id_producto_item){
               console.log('lo resta');
               det_pedido.splice(i, 1);  
               }
             i++;
             }
             if(_cantidad_nueva!=0) {
              det_pedido.push({
                id_producto: item.id_producto, 
                nombre: item.nombre,
                cantidad: _cantidad_nueva, 
                total:_total
              });
             }
              this.pedido.set_variable_pedido(det_pedido);
              this.productos_seleccionados();
              this.sumar_total();

           }
          }
        }
      ]
    });
    prompt.present();
  }
   sumar_total(){
    let _det_pedido=this.result_producto_seleccionado;
    let _cantidad_productos:any=0;
    let _total_productos:any=0;
     for(let value of _det_pedido) {
      _cantidad_productos=_cantidad_productos+value.cantidad;
      _total_productos=_total_productos+parseInt(value.total);
     }
     this.pedido.set_variable_items(_cantidad_productos);
     this.pedido.set_variable_total(_total_productos);
   }
}
