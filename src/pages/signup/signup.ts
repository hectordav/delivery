import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {PrregistroProvider}from '../../providers/prregistro/prregistro';
import { User } from '../../providers/providers';
import {PrloginProvider}from '../../providers/prlogin/prlogin';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
   cuenta:any={
     curp:'',
     nombre:'',
     direccion:'',
     correo:'',
     pass:'',
     telf:''
   };
  // Our translated text strings
   result_registro:any;
  constructor(public navCtrl: NavController,public user: User,public toastCtrl: ToastController,public translateService: TranslateService, public registro:PrregistroProvider, public login:PrloginProvider) {
  }
  registro_usuario(){
    let curp=this.cuenta.curp;
    let nombre=this.cuenta.nombre;
    let direccion=this.cuenta.direccion;
    let correo=this.cuenta.correo;
    let pass=this.cuenta.pass;
    let telf=this.cuenta.telf;
    let id_nivel='4';
    /**************************/
    let token='1';/*this.login.getToken();*/
    let serial='1';/*this.login.get_serial();*/
     this.registro.guardar_usuario(curp,nombre,direccion,correo,pass,telf,token,serial,id_nivel).subscribe(
       registro => {
         this.result_registro=registro;
         let dni;
         let login;
          for(let value of this.result_registro) {
           dni=value.dni;
           login=value.login;
          }
          if(dni==curp || login==correo) {
            let mensaje='CURP o Login ya existen';
            this.loading_toast(mensaje);
          }else{
            let mensaje='Usuario Guardado, ya puede inciar sesion';
            this.loading_toast(mensaje);
            this.navCtrl.setRoot('WelcomePage');
          }
       },
       err => {console.log(err);
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
}
