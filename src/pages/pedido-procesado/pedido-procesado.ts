import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar,AlertController } from 'ionic-angular';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {PrhoraEntregaProvider}from '../../providers/prhora-entrega/prhora-entrega';
import {PrestablecimientoProvider}from '../../providers/prestablecimiento/prestablecimiento';
import {PrpushEstablecimientoProvider}from '../../providers/prpush-establecimiento/prpush-establecimiento';
import {PrpagoTarjetaProvider}from '../../providers/prpago-tarjeta/prpago-tarjeta';
import {SrvalerttoastService} from '../../services/srv-alert-toast';

@IonicPage()
@Component({
  selector: 'page-pedido-procesado',
  templateUrl: 'pedido-procesado.html',
})
export class PedidoProcesadoPage {
	@ViewChild(Navbar) navBar: Navbar;
  result_pedido:any;
	result_det_pedido:any;
  result_direccion_entrega_todas:any;
  result_direccion_entrega_activa:any;
  result_hora_entrega:any;
  id_hora_entrega:any;
  id_metodo_pago:any;
  id_direccion_entrega:any;
  total_articulos:any;
  sub_total:any;
  comision:any;
  total:any;
  direccion:any;
  detalle_direccion:any;
  result_pedido_eliminado:any;
  result_actualiza_pedido:any;
  id_establecimiento:any;
  result_push_establecimiento:any;
  contar_pedido:any;
  result_contar_pedido:any;
  result_pago_tarjeta:any;
  variable_metodo_pago:any;
constructor(public navCtrl: NavController, public navParams: NavParams, public pr_pedido:PrpedidoProvider, public pr_login:PrloginProvider, public pr_direccion_entrega:PrdireccionEntregaProvider, public pr_hora_entrega:PrhoraEntregaProvider, public pr_establecimiento:PrestablecimientoProvider, public alertCtrl:AlertController, public srv_alert_toast:SrvalerttoastService, public pr_push_establecimiento:PrpushEstablecimientoProvider, public pago_tarjeta:PrpagoTarjetaProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoProcesadoPage');
    this.get_pago_tarjeta();
    this.get_pedido_procesado();
    this.setBackButtonAction();
  }
  get_contar_pedido(){
    let _data_usuario=this.pr_login.get_inicio_sesion();
    let _id_usuario;
      for(let value of _data_usuario) {
       _id_usuario=value.id_usuario;
      }
     this.pr_pedido.contar_pedido(_id_usuario).subscribe(
        pr_pedido => {
          this.result_contar_pedido=pr_pedido;
           console.log("REGISTRO contar pedido");
           console.log(this.result_contar_pedido);
           if(this.result_contar_pedido>1) {
             this.variable_metodo_pago='Si';
             
           }else{
             this.variable_metodo_pago='No';
           }
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  get_pago_tarjeta(){
     this.pago_tarjeta.get_pago_tarjeta().subscribe(
        pago_tarjeta => {
          this.result_pago_tarjeta=pago_tarjeta;
           console.log("REGISTRO EXISTE");
           let _variable;
           for(let value of this.result_pago_tarjeta) {
            _variable=value.pago_tarjeta;
           }
           if(_variable=='Si'){
             this.variable_metodo_pago='Si';
           }else{
             this.get_contar_pedido();
           }
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  get_pedido_procesado(){
  	/*let id_pedido=this.pr_pedido.get_id_pedido();*/
    this.result_det_pedido=this.pr_pedido.get_det_pedido_procesado();
    this.result_hora_entrega=this.pr_hora_entrega.get_variable_result_hora_entrega();
    this.result_direccion_entrega_todas=this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
    this.result_direccion_entrega_activa=this.pr_direccion_entrega.get_variable_direccion_entrega_activa();
/*    let _id_direccion_entrega=this.pr_direccion_entrega.get_variable_id_direccion_entrega_activa();
    let direccion_entrega=this.pr_direccion_entrega.get_variable_direccion_entrega_activa();*/
    /*let det_pedido=this.pr_pedido.get_det_pedido_procesado();*/
    let pedido=this.pr_pedido.get_pedido_procesado();
    this.comision=parseFloat(this.pr_establecimiento.get_comision_establecimiento());
     for(let value of this.result_direccion_entrega_activa) {
      this.direccion=value.direccion; 
      this.detalle_direccion=value.detalles_direccion;
      } 
     for(let value of pedido) {
      this.id_establecimiento=value.id_establecimiento;
      this.total_articulos=value.total_articulos;
      this.sub_total=parseFloat(value.total_precio);
      this.total=this.sub_total+ this.comision;
      this.total=this.total.toFixed(2);
     }
     console.log(this.total);
  }
      setBackButtonAction(){
      let det_pedido=this.pr_pedido.get_variable_pedido();
      console.log(det_pedido.length);
       this.navBar.backButtonClick = () => {
         let _titulo='Advertencia';
         let accion;
         let _mensaje='Al Salir, se borrará el pedido en la ase de datos desea continuar?';
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
              console.log('entra en si');
              let id_pedido=this.pr_pedido.get_id_pedido();
               this.pr_pedido.eliminar_pedido(id_pedido).subscribe(
                pr_pedido => {
                this.result_pedido_eliminado=pr_pedido;
                console.log("REGISTRO EXISTE");
                this.navCtrl.pop();
                },
                err => {console.log("NO EXISTE REGISTRO");
                },
                );
            }
          }
          ]
          });
          alert.present();
     }
    }
  procesar_pedido(){
    let _hora_entrega=this.result_hora_entrega;
    let _id_hora_entrega=this.id_hora_entrega;
    let _id_metodo_pago=this.id_metodo_pago;
    let _id_pedido=this.pr_pedido.get_id_pedido();
    /*la hora de entrega*/
    let _hora_registrada;
    let _hora_inicio_split;
    let _hora_fin_split;
    let f=new Date();
    /*let cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();*/ /*la hora y los minutos*/ 
    let _hora_dispositivo=f.getHours(); /*11;*/ 
    if(_id_hora_entrega==undefined) {
        let titulo="Error";
        let mensaje="Seleccione Hora de entrega";
        this.srv_alert_toast.show_alert(titulo,mensaje);
      }else{
        if(_id_metodo_pago==undefined) {
          let titulo="Error";
          let mensaje="Seleccione un metodo de pago";
          this.srv_alert_toast.show_alert(titulo,mensaje);
        }else{
           for(let value of _hora_entrega) {
            let id_hora_entrega=value.id;
              if(_id_hora_entrega==id_hora_entrega) {
                _hora_registrada=value.descripcion.split('-');
                _hora_inicio_split=_hora_registrada['0'].split(':');
                _hora_fin_split=_hora_registrada['1'].split(':');
                /*let _hora_inicio=_hora_inicio_split['0'];*/
                let _hora_fin=_hora_fin_split['0'];
                /*si la hora del dispositivo es mayuor a la horafinal*/
                if(_hora_dispositivo>_hora_fin) {
                  let titulo="Error";
                  let mensaje="La hora actual es mayor a la hora seleccionada";
                  this.srv_alert_toast.show_alert(titulo,mensaje);
                }else{
                  /**************************************************/
                  console.log('esta en el rango de la hora');
                  let item_alert='Espere por favor';
                  this.srv_alert_toast.show_loading(item_alert);
                    if(_id_metodo_pago==2) {
                      this.pr_pedido.set_id_metodo_pago(_id_metodo_pago);
                      this.pr_pedido.set_id_hora_entrega(_id_hora_entrega);
                      this.pr_pedido.set_id_pedido(_id_pedido);
                      this.pr_pedido.set_total(this.total);
                      this.srv_alert_toast.dismis_loading();
                      this.navCtrl.push('PagoPayuPage');
                    }else{
                       this.pr_pedido.actualizar_pedido(_id_pedido,_id_hora_entrega,_id_metodo_pago).subscribe(
                        pr_pedido => {
                        this.result_actualiza_pedido=pr_pedido;
                         console.log("se ha actualizado el pedido");
                         this.enviar_push_establecimiento();
                        },
                        err => {console.log("NO EXISTE REGISTRO");
                        },
                      );
                    }
                   /*******************************************************/
                  /*aqui colocar la parte de pago con tarjeta de credito y quitar la parte de actualizar pedido*/
                   /*******************************************************/
                  
                   /*******************************************************/
                   /*******************************************************/

                }
              }
           }
        }
      }
     /***********************/
  }
  enviar_push_establecimiento(){
    let _id_establecimiento=this.id_establecimiento;
     this.pr_push_establecimiento.push_nuevo_pedido(_id_establecimiento).subscribe(
        pr_push_establecimiento => {
          this.result_push_establecimiento=pr_push_establecimiento;
           console.log("Se envia el push al establecimiento");
            this.srv_alert_toast.dismis_loading();
            let titulo="Pedido Procesado";
            let mensaje="Su pedido se ha procesado con éxito";
            this.srv_alert_toast.show_alert(titulo,mensaje);
            this.borrar_items_pedido();
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  borrar_items_pedido(){
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
    this.navCtrl.popToRoot();
  }
}
