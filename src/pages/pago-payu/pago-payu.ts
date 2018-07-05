import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrpedidoProvider}from '../../providers/prpedido/prpedido';
import {PrpagoTarjetaProvider}from '../../providers/prpago-tarjeta/prpago-tarjeta';

import {Md5} from 'ts-md5/dist/md5';

@IonicPage()
@Component({
  selector: 'page-pago-payu',
  templateUrl: 'pago-payu.html',
})
export class PagoPayuPage {
	myForm: FormGroup;
	datos_servicio:any={
    id_pedido:'',
    id_hora_entrega:'',
    id_metodo_pago:'',
    total:'',
		nombre_tarjeta:'',
		num_tarjeta:'',
		fecha_exp:'',
		cvc:'',
    referenceCode:'',
  };
  results:any;
  results_token:any;
  valor_token:any;
  results_token_pago_payu:any;
  signature:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb: FormBuilder,public pr_pedido:PrpedidoProvider, public alertCtrl:AlertController, public pago_tarjeta:PrpagoTarjetaProvider) {
  	 this.myForm= this.fb.group({
      'txt_nombre_tarjeta': ['', [Validators.required]],
      'txt_num_tarjeta': ['', [Validators.required]],
      'dt_fecha_exp': ['', [Validators.required]],
      'txt_cvc': ['', [Validators.required]]
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPayuPage');
    this.datos_pago();
  }
  datos_pago(){
    this.datos_servicio.id_pedido=this.pr_pedido.get_id_pedido();
    this.datos_servicio.id_hora_entrega=this.pr_pedido.get_id_hora_entrega();
    this.datos_servicio.id_metodo_pago=this.pr_pedido.get_id_metodo_pago();
    this.datos_servicio.total=this.pr_pedido.get_total();
  }
    pago_payu(){
  	let datos=this.myForm.value;
		let nombre_tarjeta=datos['txt_nombre_tarjeta'];
		let num_tarjeta=datos['txt_num_tarjeta'];
		let fecha_exp=datos['dt_fecha_exp'];
		let cvc=datos['txt_cvc'];
  	if(nombre_tarjeta=='') {
  		let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Debe ingresar El Nombre como aparece en la tarjeta',
        buttons: ['OK']
        });
        alert.present();
  	}else{
  		if(num_tarjeta=='') {
  			let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe ingresar un numero de tarjeta',
          buttons: ['OK']
          });
          alert.present();
  		}else{
  			if(fecha_exp=='') {
  				let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe ingresar la fecha de expiracion de la tarjeta',
          buttons: ['OK']
          });
          alert.present();
  			}else{
  				if(cvc=='') {
  				let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Debe ingresar los 3 ultimos numero del codigo de seguridad de la tarjeta',
          buttons: ['OK']
          });
          alert.present();
  			}else{
  				let fecha=fecha_exp.split('-');
  				this.datos_servicio.nombre_tarjeta=nombre_tarjeta;
  				this.datos_servicio.num_tarjeta=num_tarjeta;
  				this.datos_servicio.fecha_exp=fecha[0]+'/'+fecha[1];
  				console.log(this.datos_servicio.fecha_exp);
  				this.datos_servicio.cvc=cvc;
          this.asignacion();
          this.pagar();
  				
  			}
  		}
  	}
  }
}
  asignacion(){
    let api_key='v5A1j8GF682F1UJcf7nHzi8w3g';
    let merchanId=701474;
    let referenceCode=12345;
    this.datos_servicio.referenceCode=referenceCode;
    let monto=this.datos_servicio.total;
    let moneda='MXN';
    let cadena=api_key+'~'+merchanId+'~'+referenceCode+'~'+monto+'~'+moneda;
    this.datos_servicio.signature=Md5.hashStr(cadena);
  }
    pagar(){
   
   let envio_datos=
   {
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512323",
         "referenceCode":this.datos_servicio.referenceCode, // Debe ser unico para cada intento de transaccion  max 255 caracteres.
         "description": "payment test",
         "language": "es",
         "signature": this.datos_servicio.signature,
         "notifyUrl": "http://www.test.com/confirmation",
         "additionalValues": {
            "TX_VALUE": {
               "value": this.datos_servicio.monto,
               "currency": "MXN"
            }
         },
         "buyer": {
            "merchantBuyerId": "1",
            "fullName": this.datos_servicio.nombre_tarjeta, // lo tomo de la pantalla
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "5415668464654",
            "shippingAddress": {
               "street1": "Avenida de la poesia",
               "street2": "106",
               "city": "Guadalajara",
               "state": "Jalisco",
               "country": "MX",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Avenida de la poesia",
            "street2": "106",
            "city": "Guadalajara",
            "state": "Jalisco",
            "country": "MX",
            "postalCode": "0000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "av abancay",
            "street2": "cra 4",
            "city": "Iquitos",
            "state": "LO",
            "country": "MX",
            "postalCode": "64000",
            "phone": "7563126"
         }
      },
      "creditCard": {
         "number": this.datos_servicio.num_tarjeta, // La variable capturada de la pantalla
         "securityCode": this.datos_servicio.cvc, // debes capturarlo para realizar el pago
         "expirationDate": this.datos_servicio.fecha_exp , //Variable capturada de la pantalla
         "name":this.datos_servicio.nombre_tarjeta // nombre de pagador en la tarjeta
      },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "VISA",
      "paymentCountry": "MXN",
      "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      "ipAddress": "127.0.0.1",
      "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
   },
   "test": true
}

    this.pago_tarjeta.enviar_pago_tarjeta(envio_datos).subscribe(
       prueba => {
         this.results=prueba;
          console.log("REGISTRO PAGO TARJETA");
           /*let estado_transaccion;
           let mensaje;
           let valor=prueba;
*/           console.log(prueba);
           debugger
           /*estado_transaccion=valor.responseCode;
           mensaje=valor.responseMessage;
           console.log(estado_transaccion);
           if(estado_transaccion=='APPROVED') {*/
						/*aqui va la transaccion del pago*/
          /*  let _monto=this.datos_servicio.monto;
            let _id_usuario_conductor= this.datos_servicio.id_taxista;
            
           this.pago_tarjeta.pago_payu(_id_usuario_conductor,_monto).subscribe(
              servicio => {
                this.results_token_pago_payu=servicio;
                  this.envio_modal_rating();
                 console.log("REGISTRO EXISTE");
              },
              err => {console.log("NO EXISTE REGISTRO")},
            );*/
          /********************************************/

          /* }else{
             this.problema_pago();
           }*/
          
          
       },
       err => {console.log("NO EXISTE REGISTRO");
       },
     );
  }

}
