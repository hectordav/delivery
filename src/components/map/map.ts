import { Component,OnInit } from '@angular/core';
import {PrloginProvider} from "../../providers/prlogin/prlogin";
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import {DireccionEntregaPage} from '../../pages/direccion-entrega/direccion-entrega';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';

declare var google: any;
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit {

  public map; 
  g_latitud:any;
  g_longitud:any;
  g_lat_home:any;
  g_lng_home:any;
  lat_lng:any;
  constructor(public login:PrloginProvider,public geocode:NativeGeocoder, public direccion_entrega:DireccionEntregaPage, public pr_direccion_entrega:PrdireccionEntregaProvider) {
    console.log('Hello MapComponent Component');
  }
  ngOnInit(){
    this.g_lat_home=this.login.getMylat_home();
    this.g_lng_home=this.login.getMylng_home();  
    this.map=this.createMap();		
  }
  createMap(location= new google.maps.LatLng(25.686614, -100.316113)){
  	let mapOptions={
  		center: location,
  		zoom:16, 
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		disableDefaultUI: true,
  	}
  	let mapEl=document.getElementById('mapa');
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
        this.direccion_entrega.la_direccion();
        this.lat_lng=newLatLng;
        console.log(this.lat_lng);
        this.map.setCenter(newLatLng);
        this.Position_Marker();
    }
    );
    this.pr_direccion_entrega.set_variable_mapa(this.map);
    return map;
  }
		Position_Marker(){
			let icono = "assets/img/cliente.png";
			let marker = new google.maps.Marker({
			map: this.map,
			/* animation: google.maps.Animation.DROP,*/
			position: this.lat_lng,
			draggable: true,
			icon:icono
			});
			let content = "<h4>Usted está aqui</h4>";
			this.Position_lat_lng(marker, content);
		}
Position_lat_lng(marker, content){
  /*let infoWindow = new google.maps.InfoWindow({
    content: content
  }); */
  google.maps.event.addListener(marker, 'dragend', () => {
    this.g_latitud=marker.getPosition().lat();
    this.g_longitud=marker.getPosition().lng()
    this.login.setMylat(this.g_latitud);
    this.login.setMylng(this.g_longitud);
    console.log(this.g_latitud);
    console.log(this.g_longitud);
    this.direccion_entrega.la_direccion();
    
    
    /*infoWindow.open(this.map, marker);*/
  });
}

}
