import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrrubroProvider}from '../../providers/prrubro/prrubro';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {PrrutasProvider}from '../../providers/prrutas/prrutas';
import {PrrecargoProvider}from '../../providers/prrecargo/prrecargo';
import {PrproductoEstablecimientoProvider}from '../../providers/prproducto-establecimiento/prproducto-establecimiento';
import {PrestablecimientoProvider}from '../../providers/prestablecimiento/prestablecimiento';
import {PrAlertToastProvider}from '../../providers/pr-alert-toast/pr-alert-toast';
import {GoogleMapsLatLng} from 'ionic-native';
import {SrvalerttoastService} from '../../services/srv-alert-toast';

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-establecimiento',
  templateUrl: 'establecimiento.html',
})
export class EstablecimientoPage {
	hora_dispositivo:any;
	result_establecimiento: any[] = [];
	ruta_rubro:string;
	lat_lng_direccion_entrega:any;
	lat_lng_establecimiento:any;
	distancia:any;
	distancia_km:any;
	hora_inicio:any;
	hora_fin:any;
	horario:any;
	nombre:any;
	img_est_abierto:any;
	recargo_2:any;
  result_producto_establecimiento:any;
  result_establecimiento_id:any;
  variable_status:any=0;
	public render = new google.maps.DirectionsRenderer();
  public directionsService= new google.maps.DirectionsService;


  constructor(public navCtrl: NavController, public navParams: NavParams, public rubro:PrrubroProvider,public ruta:PrrutasProvider, public direccion_entrega:PrdireccionEntregaProvider, public recargo:PrrecargoProvider, public alert_toast:SrvalerttoastService, public producto_establecimiento:PrproductoEstablecimientoProvider, public prestablecimiento:PrestablecimientoProvider, public pr_alert_toast:PrAlertToastProvider) {
  	 this.ruta_rubro=this.ruta.get_ruta_web();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstablecimientoPage');
  	this.get_establecimientos_id_rubro();
  }
  get_establecimientos_id_rubro(){
  	let _direccion_entrega=this.direccion_entrega.get_variable_direccion_entrega_activa();/*la direccion de entrega activa*/
    let _recargo=this.recargo.get_result_recargo();/*el recargo buscado en el home*/
    let item_alert='Espere por favor';
    this.alert_toast.show_loading(item_alert);
  	 for(let value of _direccion_entrega) {
  			this.lat_lng_direccion_entrega=value.lat_lng;
  	 }
  	let establecimientos=this.rubro.get_rubro_establecimiento();/* los establecimientos segun el rubro*/
  	console.log(establecimientos);
		let f=new Date();
		/*let cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();*/ /*la hora y los minutos*/ 
		this.hora_dispositivo=f.getHours();/*7  temportal*/ 
		/*let min_dispositivo=f.getMinutes();*/
		let hora_establecimiento_min;	 
		let hora_establecimiento_min_inicio;	 
		let hora_establecimiento_min_fin;
    let _id_establecimiento;
      /********************el establecimiento*********************/
			 for(let value of establecimientos) {
    		hora_establecimiento_min=value.horario.split("-");
				hora_establecimiento_min_inicio=hora_establecimiento_min['0'];
				hora_establecimiento_min_fin=hora_establecimiento_min['1'];
				this.hora_inicio=hora_establecimiento_min_inicio.split(':');
				this.hora_fin=hora_establecimiento_min_fin.split(':');
				this.lat_lng_establecimiento=value.lat_lng;
				/*¨*********************la parte de la distancia************************/
				/*entra en calcular distancia establecimiento*/
  	let _lat_lng_direccion_entrega=this.lat_lng_direccion_entrega.split(',');
  	let _lat_lng_establecimiento=this.lat_lng_establecimiento.split(',');
  	let lat_i:any=parseFloat(_lat_lng_direccion_entrega['0']);
    let lng_i:any=parseFloat(_lat_lng_direccion_entrega['1']);
    let lat_f:any=parseFloat(_lat_lng_establecimiento['0']);
    let lng_f:any=parseFloat(_lat_lng_establecimiento['1']);
    let inicio=new GoogleMapsLatLng(lat_i,lng_i);
    let fin=new GoogleMapsLatLng(lat_f,lng_f);
    let panel = document.getElementById('panel'); 
    let directionsDisplay = null;
    directionsDisplay = this.render;
            /*el panel que tengo en el html OJO debe ir*/
     document.getElementById("panel").innerHTML = "";
     console.log('entro en panel');
     directionsDisplay.setPanel(panel);
      this.directionsService.route({
        origin: inicio,
        destination: fin,
        travelMode: google.maps.TravelMode.DRIVING
      },(response,status)=>{
        console.log('entro en response status');
        let distance = null;
        let duration=null;
        if(status === google.maps.DirectionsStatus.OK) {
        /*este muestra la ruta marcada*/
          directionsDisplay.setDirections(response);
         let leg = response.routes[ 0 ].legs[ 0 ];
         console.log('en leg');
         console.log(leg);
        let legs = response.routes[0].legs;
        distance = legs[0].distance.text;
        duration = legs[0].duration.text;
        this.distancia=distance;
        let distancia_split=this.distancia.split(' ');
        this.distancia_km=distancia_split['0'];
        let distancia_letra=distancia_split['1'];
        console.log('la distancia calculada');
        console.log(this.distancia);
        let _distancia_recargo;
        let _i=0;
        let id_recargo;
        let _recargo_2;
        /*los value los coloco aqui para que los agarre cada uno con sus valores */
        this.horario=value.horario;
				this.nombre=value.nombre_empresa;
        _id_establecimiento=value.id_establecimiento;
				this.img_est_abierto=value.img_est_abierto;
				/*********************************************/
        /**************el recargo OJO*****************/
         for(let value of _recargo) {
        		_distancia_recargo=value.descripcion;
        		if(distancia_letra=='m') {
        			let distancia_m=this.distancia_km/1000;
        			this.distancia_km=distancia_m;
        		}
        		/*debugger*/
            let dis_recargo=parseFloat(_distancia_recargo);
            let dis_km=parseFloat(this.distancia_km);
            console.log('distacia recargo '+dis_recargo);
            console.log('distacia km '+ dis_km);
            if(_i==0) {
              if(dis_km<dis_recargo) {
							_recargo_2=parseFloat(value.recargo).toFixed(2); /*para pasarle 2 decimales*/
   						console.log('es menor y salió');
              id_recargo=value.id; /*el id recargo*/
   						_i=1;
   					}	
            }
						
            console.log(_i);
       	 }
        /**************la parte del item**************/
        	if(this.hora_dispositivo>this.hora_inicio['0']) { /*si es mayor a la hora de apertura*/
					if(this.hora_dispositivo<this.hora_fin['0']) {
						 this.result_establecimiento.push({
              id_establecimiento: _id_establecimiento, 
	      			hora_establecimiento: this.horario,
	      			id:1,
	      			estado: 'Abierto',
	      			nombre:	 this.nombre,
	      			imagen:this.img_est_abierto,
	      			distancia:this.distancia,
	      			comision:_recargo_2,
              id_recargo:id_recargo
	    			});
					}else{
					 this.result_establecimiento.push({
            id_establecimiento: _id_establecimiento, 
      			hora_establecimiento: this.horario,
      			id:2,
      			estado: 'Cerrado',
      			nombre:	 this.nombre,
      			imagen:this.img_est_abierto,
      			distancia:this.distancia,
      			comision:_recargo_2,
            id_recargo:id_recargo

    			  });
					}
				}else{
					 this.result_establecimiento.push({
            id_establecimiento: _id_establecimiento,
      			hora_establecimiento: this.horario,
      			id:2,
      			estado: 'Cerrado',
      			nombre:	 this.nombre,
      			imagen:this.img_est_abierto,
      			distancia:this.distancia,
      			comision:_recargo_2,
            id_recargo:id_recargo
    			  });
				}
        }else{
          if(this.variable_status==0) {
            this.variable_status=1;
        	console.log('estatuss no es ok');
          let mensaje='Algunos establecimientos estan fuera de la zona';
          this.pr_alert_toast.mensaje_toast_pie(mensaje);
          }
        } 
      }, err => {console.log(err);
        alert(err);
            },)
				/***********************************************************************/
			}
			this.alert_toast.dismis_loading();

  }
  
get_producto_id_establecimiento(item){
  let _id_establecimiento=item.id_establecimiento;
  let _recargo=item.comision;
  this.recargo.set_comision_asignada(_recargo);
  /*guardo el establecimiento para llamarlo en la nueva pantalla*/
  this.prestablecimiento.set_result_id_establecimiento(item);
   console.log(item);
  /*busca los productos asignados al establecimiento*/
   this.producto_establecimiento.get_producto_id_establecimiento(_id_establecimiento).subscribe(
    producto_establecimiento => {
      this.result_producto_establecimiento=producto_establecimiento;
         console.log("REGISTRO EXISTE");
        if(this.result_producto_establecimiento==null) {
          let _titulo='Informacion';
          let _mensaje='No hay productos disponibles';
          this.alert_toast.show_alert(_titulo,_mensaje);
        }else{
          console.log(this.result_producto_establecimiento);
          this.producto_establecimiento.set_result_producto_establecimiento(this.result_producto_establecimiento);
          this.navCtrl.push('EstablecimientoSeleccionadoPage');
        }
      },
      err => {console.log("NO EXISTE REGISTRO");
      },
    );
   /*****************************************************/


}



}
