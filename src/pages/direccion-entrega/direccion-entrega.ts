import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {NativeGeocoder,NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {SrvalerttoastService} from '../../services/srv-alert-toast';
/*import { Geolocation} from '@ionic-native/geolocation';
*/

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-direccion-entrega',
  templateUrl: 'direccion-entrega.html',
})
export class DireccionEntregaPage {

	g_lat_i:any;
	g_lng_i:any;
	address:any={
		place:'',
    det_direccion:''
	}
  result_direccion_entrega:any;
  placesService:any;
  g_lat_home:any;
  g_lng_home:any;
  g_latitud:any;
  g_longitud:any;
  lat_lng:any;
  map:any;
  result_direccion_entrega_2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public login:PrloginProvider,public geocode:NativeGeocoder,public alertCtrl:AlertController, public direccion_entrega:PrdireccionEntregaProvider, public aler_toast:SrvalerttoastService, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionEntregaPage');
     this.map=this.createMap();
  }
   createMap(location= new google.maps.LatLng(25.686614, -100.316113)){
    let mapOptions={
      center: location,
      zoom:16, 
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    }
    let mapEl=document.getElementById('map');
    let map= new google.maps.Map(mapEl,mapOptions);
    // use GPS to get center position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.g_lat_home=this.login.getMylat_home();
        this.g_lng_home=this.login.getMylng_home();
        this.g_latitud=position.coords.latitude;
        this.g_longitud=position.coords.longitude;
        this.login.setMylat(this.g_latitud);
        this.login.setMylng(this.g_longitud);
        this.lat_lng=newLatLng;
        console.log(this.lat_lng);
        this.map.setCenter(newLatLng);
    }
    );
    return map;
  }
  public la_direccion(){
  console.log('entra en la direccion');
  this.g_lat_i=this.login.getMylat();
  this.g_lng_i=this.login.getMylng();
  this.geocode.reverseGeocode(this.g_lat_i,this.g_lng_i)
    .then((result: NativeGeocoderReverseResult) => {
     this.address.place =result.thoroughfare;
    /* alert(this.address.place);*/
    })
    .catch((error: any) => console.log(error));
}
  guardar_direccion(){
    console.log('guarda la direccion');
    let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
    let id_usuario;
     for(let value of result_login) {
        id_usuario=value.id_usuario;
     }
    let lat_lng:any=this.g_lat_i+','+this.g_lng_i;
    let direccion=this.address.place;
    let det_direccion=this.address.det_direccion;
    console.log(det_direccion);
    if(det_direccion=='') {
     let titulo='Error';
     let mensaje='Debe Guardar un Detalle de Direccion';
       this.aler_toast.show_alert(titulo,mensaje);
    }else{
       this.direccion_entrega.guardar_direccion_entrega(id_usuario,lat_lng,direccion,det_direccion).subscribe(
          direccion_entrega => {
            this.result_direccion_entrega=direccion_entrega;
             let titulo='Guardar';
             let mensaje='Direccion Guardada';
             this.aler_toast.show_alert(titulo,mensaje);
             this.get_direccion_entrega();
          },
          err => {console.log("NO EXISTE REGISTRO");
          },
        );

    }
  }
  autocompletar(){
     let modal = this.modalCtrl.create('AutocompletePage');
     /*si sale de la modal, actualiza el precio y los items de los productos seleccionados.*/
     modal.onDidDismiss(data => {
      if(data) {
         this.address.place = data.description;
       this.getPlaceDetail_i(data.place_id);
      }
    });
      modal.present();
  }
  private getPlaceDetail_i(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
               /* self.placedetails.address = place.formatted_address;*/
/*                let algo=place.formatted_address;
*/              console.log(place.geometry.location.lat());
                self.g_lat_i= place.geometry.location.lat();
                self.g_lng_i= place.geometry.location.lng();
                console.log(self.g_lat_i);
                console.log(self.g_lng_i);
                self.address.set = true;
                /*console.log('page > getPlaceDetail > details > ', self.placedetails);*/
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    }
  get_direccion_entrega(){
    /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
     let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
    let _id_usuario;
     for(let value of result_login) {
      _id_usuario=value.id_usuario;
     }
     this.direccion_entrega.get_direccion_entrega(_id_usuario).subscribe(
        direccion_entrega => {
          let data_direccion_entrega=direccion_entrega;
          let mensaje=data_direccion_entrega.mensaje;
          let data=data_direccion_entrega.data;
          if(mensaje=='existen direccion de entrega') {
            localStorage.setItem('delivery_direccion_entrega',JSON.stringify(data));
            this.direccion_entrega.set_variable_result_direccion_entrega_todas(data);
            this.navCtrl.setRoot('HomePage');
          }
          console.log("REGISTRO EXISTE");
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
     );
  }
}
