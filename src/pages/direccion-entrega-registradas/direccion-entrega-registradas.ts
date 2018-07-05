import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {PrloginProvider}from '../../providers/prlogin/prlogin';


@IonicPage()
@Component({
  selector: 'page-direccion-entrega-registradas',
  templateUrl: 'direccion-entrega-registradas.html',
})
export class DireccionEntregaRegistradasPage {
	result_direccion_entrega_todas:any;
	result_direccion_entrega:any;
	result_direccion_entrega_2:any;
	result_eliminar_direccion:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pr_direccion_entrega:PrdireccionEntregaProvider,public login:PrloginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionEntregaRegistradasPage');
    this.get_direccion_entrega_todas();
  }
  get_direccion_entrega_todas(){
  	this.result_direccion_entrega_todas=this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
  	console.log(this.result_direccion_entrega_todas);
  }
  seleccionar_direccion(item){
  	let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
  	let _id_direccion_entrega=item.id;
    let _id_usuario;
     for(let value of result_login) {
      _id_usuario=value.id_usuario;
     }
      this.pr_direccion_entrega.activar_direccion_entrega(_id_usuario,_id_direccion_entrega).subscribe(
         pr_direccion_entrega => {
           this.result_direccion_entrega=pr_direccion_entrega;
            console.log("REGISTRO guardado direccion entrega");
            this.get_direccion_entrega();
         },
         err => {console.log("NO EXISTE REGISTRO");
         },
      );  	 
  }
  nueva_direccion(){
  	this.navCtrl.push('DireccionEntregaPage');
  }
  eliminar_direccion(item){
  	let _id_direccion_entrega=item.id;
  	 this.pr_direccion_entrega.eliminar_direccion_entrega(_id_direccion_entrega).subscribe(
  	    pr_direccion_entrega => {
  	      this.result_eliminar_direccion=pr_direccion_entrega;
  	       console.log("REGISTRO EXISTE");
  	       this.get_direccion_entrega();
  	    },
  	    err => {console.log("NO EXISTE REGISTRO");
  	    },
  	  );
  }
  get_direccion_entrega(){
    /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
    let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
    let _id_usuario;
     for(let value of result_login) {
      _id_usuario=value.id_usuario;
     }
     this.pr_direccion_entrega.get_direccion_entrega(_id_usuario).subscribe(
        direccion_entrega => {
          let data_direccion_entrega=direccion_entrega;
          let mensaje=data_direccion_entrega.mensaje;
          let data=data_direccion_entrega.data;
          localStorage.setItem('delivery_direccion_entrega',JSON.stringify(data));
          if(mensaje=='existen direccion de entrega') {
             this.direccion_entrega_activa();
            this.pr_direccion_entrega.set_variable_result_direccion_entrega_todas(data);
           this.result_direccion_entrega_todas=this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
         }
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
     );
  }
  direccion_entrega_activa(){
     let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
      let _id_usuario;
       for(let value of result_login) {
        _id_usuario=value.id_usuario;
       }
     this.pr_direccion_entrega.get_direccion_entrega_activo(_id_usuario).subscribe(
       direccion_entrega => {
         let direccion_entrega_2=direccion_entrega;
         console.log(direccion_entrega_2);
         let data=direccion_entrega_2.data;
         localStorage.setItem('delivery_direccion_entrega_activa',JSON.stringify(data));
         this.pr_direccion_entrega.set_variable_direccion_entrega(data);
         /*****************/
         this.navCtrl.setRoot('HomePage');
       },
        err => {console.log("NO EXISTE REGISTRO");
       },
       );
  }

}
