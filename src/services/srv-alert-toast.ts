import {Injectable} from '@angular/core';
import {AlertController,ToastController,LoadingController } from 'ionic-angular';
@Injectable()
export class SrvalerttoastService {
	 result_reserva:any;
   loader:any;
   variable_alert_confirmar:any;
  constructor(public alertCtrl:AlertController, public toastCtrl:ToastController, public loadingCtrl:LoadingController) {}
  set_variable_alert_confirmar(value){
    this.variable_alert_confirmar=value;
  }
   
  get_variable_alert_confirmar(){
    return this.variable_alert_confirmar;
  }

   show_alert(titulo,mensaje){
      let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
      });
      alert.present();
    }
    confirmar_accion(titulo,mensaje) {
      let alert = this.alertCtrl.create({
    title: titulo,
    message: mensaje,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          this.set_variable_alert_confirmar(0);
        }
      },
      {
        text: 'Buy',
        handler: () => {
          this.set_variable_alert_confirmar(1);
        }
      }
    ]
  });
  alert.present();
}
  loading_toast(valor){
    let toast = this.toastCtrl.create({
        message: valor,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
   show_loading(item) {
      this.loader = this.loadingCtrl.create({
          content: item
      });
      this.loader.present();
   }
   dismis_loading(){
     this.loader.dismiss();
   }
   
}
