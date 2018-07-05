import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';


@IonicPage()
@Component({
  selector: 'page-calificar-pedido',
  templateUrl: 'calificar-pedido.html',
})
export class CalificarPedidoPage {
	data_calificacion_pedido:any={
		id_pedido:'',
		calificacion:'',
		comentario:''

	}
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_pedido:PrpedidoProvider, public alert_toast:PrAlertToastProvider) {
  }
  guardar_calificacion(){
  	let id_pedido=this.pr_pedido.get_id_pedido();
  	this.data_calificacion_pedido.id_pedido=id_pedido;
  	 this.pr_pedido.guardar_calificacion(this.data_calificacion_pedido).subscribe(
  	    pr_pedido => {
  	      let mensaje='Su opinion es importante, muchas gracias por calificarnos';
  	      this.alert_toast.mensaje_toast_pie(mensaje);
  	       this.navCtrl.pop();
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );

  }

}
