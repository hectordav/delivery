import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';

/**
 * Generated class for the PedidosHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-historial',
  templateUrl: 'pedidos-historial.html',
})
export class PedidosHistorialPage {
	result_pedidos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_pedidos:PrpedidoProvider,public alert_toast:PrAlertToastProvider) {
  }
  ionViewDidEnter(){
    this.historial_pedidos(); 
  }
  historial_pedidos(){
  	let data=JSON.parse(localStorage.getItem('delivery_cliente'));
    console.log(data);
    let data_cliente={
      id_usuario:''
    }
    for(let value of data) {
     data_cliente.id_usuario=value.id_usuario;
    }
    let mens='Cargando pedidos';
    this.alert_toast.show_loading(mens);
     this.pr_pedidos.get_pedido_id_usuario(data_cliente).subscribe(
        pr_pedidos => {
         let pedido=pr_pedidos;
         let mensaje=pedido.mensaje;
         if(mensaje=='NO existen pedidos') {
         	let mensaje='No existen pedidos';
         	this.alert_toast.mensaje_toast_pie(mensaje);
	        }else{
	         	this.result_pedidos=pedido.data;
	         	console.log(this.result_pedidos);
	        }
          this.alert_toast.dismis_loading();
         console.log("REGISTRO EXISTE pr_pedidos");
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
    ver_pedido(item){
    let _id_pedido=item.id_pedido;
    this.pr_pedidos.set_variable_status_pedido(item.id_status_pedido);
    this.pr_pedidos.set_result_pedido(item);
    let mensaje='Cargando detalle de pedido';
    this.alert_toast.show_loading(mensaje);
     this.pr_pedidos.get_det_pedido_id_pedido(_id_pedido).subscribe(
        pr_pedido => {
          let result_det_pedido=pr_pedido;
          this.pr_pedidos.set_result_det_pedido(result_det_pedido);
           console.log("REGISTRO EXISTE");
           this.pr_pedidos.get_extra_det_pedido_id_pedido(_id_pedido).subscribe(
              pr_pedidos => {
                let result_extra_pedido=pr_pedidos;
                let mensaje=result_extra_pedido.mensaje;
                 console.log("REGISTRO EXISTE pr_pedidos");
                if(mensaje=='Existe extra pedido') {
                  let data=result_extra_pedido.data;
                  this.pr_pedidos.set_variable_extra_pedido(1);
                  this.pr_pedidos.set_result_extra_pedido(data);
                  this.alert_toast.dismis_loading();
                }else{
                  this.pr_pedidos.set_variable_extra_pedido(0);
                  this.alert_toast.dismis_loading();
                }
                /*el token del repartidor*/
                 this.pr_pedidos.get_token_usuario_repartidor_id_pedido(_id_pedido).subscribe(
                    pr_pedidos => {
                      let result_token=pr_pedidos;
                      let mensaje=result_token.mensaje;
                      console.log(_id_pedido);
                      if(mensaje=='no existe repartidor asignado') {
                        let mensaje='Este pedido no tiene un repartidor asignado';
                        this.alert_toast.mensaje_toast_pie(mensaje);
                        this.pr_pedidos.set_varibale_token_repartidor(0);
                      }else{
                        let data=result_token.data;
												this.pr_pedidos.set_token_repartidor_pedido_seleccionado(data);
                        this.pr_pedidos.set_varibale_token_repartidor(1);
                       console.log("REGISTRO EXISTE pr_pedidos");
                      }
                    },
                    err => {console.log("NO EXISTE REGISTRO");
                    },
                  );
                /*************************/
                /*el token empresa*/
                this.pr_pedidos.get_token_usuario_empresa_id_pedido(_id_pedido).subscribe(
                    pr_pedidos => {
                      let result_token=pr_pedidos;
                      let mensaje=result_token.mensaje;
                      console.log(_id_pedido);
                      if(mensaje=='no existe usuario empresa asignado') {
                        let mensaje='no existe usuario empresa asignado';
                        this.alert_toast.mensaje_toast_pie(mensaje);
                        this.pr_pedidos.set_variable_token_empresa(0);
                        this.navCtrl.push('PedidoVerPage');
                      }else{
                        let data=result_token.data;
                        console.log(data);
												this.pr_pedidos.set_token_empresa_pedido_seleccionado(data);
                        this.pr_pedidos.set_variable_token_empresa(1);
                        this.navCtrl.push('PedidoVerPage');
                       console.log("REGISTRO EXISTE pr_pedidos");
                      }
                    },
                    err => {console.log("NO EXISTE REGISTRO");
                    },
                  );
                /*************************/
              },
              err => {console.log("NO EXISTE REGISTRO");
              },
            );
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  calificar_pedido(item){
    let id_pedido=item.id_pedido;
    this.pr_pedidos.set_id_pedido(id_pedido);
    this.navCtrl.push('CalificarPedidoPage');
  }

}
