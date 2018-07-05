import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import { User } from '../../providers/providers';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {PrhoraEntregaProvider}from '../../providers/prhora-entrega/prhora-entrega';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  cuenta:any={
  correo:'',
  pass:'',
  token:'',
  serial:''};
  result_login:any;
  result_direccion_entrega:any;
  result_direccion_entrega_2:any;
  result_hora_entrega:any;
  constructor(public navCtrl: NavController,public user: User,public toastCtrl: ToastController,public prlogin:PrloginProvider, public direccion_entrega:PrdireccionEntregaProvider, public alertCtrl:AlertController, public pr_hora_entrega:PrhoraEntregaProvider) {
    this.get_hora_entrega();
  }
  // Attempt to login in through our User service
  public login_manual(){
    let login=this.cuenta.correo;
    let pass= this.cuenta.pass;
    let token=this.prlogin.getToken();
    let serial=this.prlogin.get_serial();
    alert(token+' el serial '+ serial);
     this.prlogin.login_manual(login,pass,token,serial).subscribe(
        login => {
        this.result_login=login;
         let result=this.result_login;
         let mensaje=result.mensaje;
         let data=result.data;
         console.log(data);
         if(mensaje=='NO Existe Usuario') {
           let mensaje='Login y contraseña no validos';
           this.loading_toast(mensaje);
         }else{
            let id_nivel;
            let id_usuario;
            for(let value of data) {
             id_nivel=value.id_nivel;
             id_usuario=value.id_usuario;
            }
            this.prlogin.set_id_usuario(id_usuario);
           if(id_nivel==1 || id_nivel==2|| id_nivel==3) {
             let mensaje='Debes ser un cliente para iniciar sesion';
             this.loading_toast(mensaje);
           }else{
             localStorage.setItem('delivery_cliente',JSON.stringify(data))
             this.prlogin.set_inicio_sesion(data);
             /*busca la direccion de entrega, si existe lo pasa al home, sino existe llama al modulo direccion entrega*/
              this.direccion_entrega.get_direccion_entrega_activo(id_usuario).subscribe(
                 direccion_entrega => {
                   let direccion_entrega_2=direccion_entrega;
                   let mensaje=direccion_entrega_2.mensaje;
                   console.log(direccion_entrega_2);
                    if(mensaje=='NO existe direccion de entrega') {
                      console.log(this.result_direccion_entrega);
                      let info='Informacion';
                      let msg='Vamos a configurar la direccion de entrega';
                      this.show_alert(info,msg);
                    }else{
                      let data=direccion_entrega_2.data;
                      this.direccion_entrega.set_variable_direccion_entrega(data);
                       localStorage.setItem('delivery_direccion_entrega_activa',JSON.stringify(data));
                      this.get_direccion_entrega(id_usuario);
                      /*****************/
                      this.navCtrl.setRoot('HomePage');
                    }
                 },
                 err => {console.log("NO EXISTE REGISTRO");
                 },
               );

           }
           console.log('entra en el else');
         }
        },
        err => {console.log(err);
        },
      );
  }
  get_hora_entrega(){
   this.pr_hora_entrega.get_hora_entrega().subscribe(
      pr_hora_entrega => {
        this.result_hora_entrega=pr_hora_entrega;
         console.log("REGISTRO hora de entrega");
         this.pr_hora_entrega.set_variable_result_hora_entrega(this.result_hora_entrega);
      },
      err => {console.log("NO EXISTE REGISTRO");
      },
    );
  }
  get_direccion_entrega(item){
    /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
    let id_usuario=item;
     this.direccion_entrega.get_direccion_entrega(id_usuario).subscribe(
        direccion_entrega => {
          let result_direccion_entrega=direccion_entrega;
          let data=result_direccion_entrega.data;
           console.log(data);
           localStorage.setItem('delivery_direccion_entrega',JSON.stringify(data));
           this.direccion_entrega.set_variable_result_direccion_entrega_todas(data);
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  loading_toast(valor){
    let toast = this.toastCtrl.create({
        message: valor,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
  show_alert(titulo,mensaje){
    let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: mensaje,
    buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot('DireccionEntregaPage');
  }
}
