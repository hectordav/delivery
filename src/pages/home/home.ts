import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger,state, style, transition, animate } from '@angular/animations';
import {PrloginProvider}from '../../providers/prlogin/prlogin';
import {PrrubroProvider}from '../../providers/prrubro/prrubro';
import {PrrutasProvider}from '../../providers/prrutas/prrutas';
import {PrdireccionEntregaProvider}from '../../providers/prdireccion-entrega/prdireccion-entrega';
import {SrvalerttoastService} from '../../services/srv-alert-toast';
import {PrrecargoProvider}from '../../providers/prrecargo/prrecargo';
import {PrhoraEntregaProvider}from '../../providers/prhora-entrega/prhora-entrega';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('itemState', [
      state('in', style({transform: 'translateX(0)'})),
      //Enter
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('300ms linear')
      ]),
      //Leave
      transition('* => void', animate('300ms ease-out', style({
        transform: 'translateX(100%)'
      }))),
    ])
  ]
})
export class HomePage {
	items: any[] = [];
  result_rubro:any;
  ruta_rubro;
  result_establecimiento:any;
  result_direccion_entrega:any={
    id:'',
    id_usuario:'',
    id_status_direccion_entrega:'',
    detalles_direccion:'',
    direccion:'',
    lat_lng:''
  };
  result_recargo:any;
  result_hora_entrega:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public login:PrloginProvider, public rubro:PrrubroProvider, public ruta:PrrutasProvider,public alert_toast:SrvalerttoastService, public direccion_entrega:PrdireccionEntregaProvider, public recargo:PrrecargoProvider, public pr_hora_entrega:PrhoraEntregaProvider) {
    this.ruta_rubro=this.ruta.get_ruta_web();
    this.get_direccion_entrega_activo();
    this.get_recargo();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
   this.get_rubro();
   this.get_hora_entrega();
  }
  get_recargo(){
     this.recargo.get_recargo().subscribe(
        recargo => {
          this.result_recargo=recargo;
           this.recargo.set_result_recargo(this.result_recargo);
           console.log('el recargo');
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
  get_direccion_entrega_activo(){
    let result_login=JSON.parse(localStorage.getItem('delivery_cliente'));
     for(let value of result_login) {
      this.login.set_id_usuario(value.id_usuario);
     }
    let data_direccion_entrega_activa=JSON.parse(localStorage.getItem('delivery_direccion_entrega_activa'));
    let data_direccion_entrega=JSON.parse(localStorage.getItem('delivery_direccion_entrega'));
    console.log(data_direccion_entrega_activa);
    for(let value of data_direccion_entrega_activa) {
       this.result_direccion_entrega.id=value.id;
       this.result_direccion_entrega.direccion=value.direccion;
       this.direccion_entrega.set_variable_id_direccion_entrega(value.id);
    }
    this.direccion_entrega.set_variable_result_direccion_entrega_todas(data_direccion_entrega);
    this.direccion_entrega.set_variable_direccion_entrega(data_direccion_entrega);
  }
  get_rubro(){
    let mens='Cargando';
    this.alert_toast.show_loading(mens);
     this.rubro.get_rubro().subscribe(
        rubro => {
          this.alert_toast.dismis_loading();
          this.result_rubro=rubro;
           console.log("REGISTRO EXISTE");
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }
   add(){
     this.items.push({
      title: 'item',
      state: 'in'
    });
  }
  remove(){
    this.items.splice(0,1);
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
  get_establecimientos_id_rubro(item){
    let id_rubro=item;
    let mensaje='Cargando Establecimientos, espere por favor.';
    this.alert_toast.show_loading(mensaje);    
     this.rubro.get_establecimientos_id_rubro(id_rubro).subscribe(
        rubro => {
          this.result_establecimiento=rubro;
          this.alert_toast.dismis_loading();
          if(this.result_establecimiento==null) {
            let titulo='Error';
            let mensaje='No existen establecimientos asociados';
            this.alert_toast.show_alert(titulo,mensaje);
          }else{
            this.rubro.set_rubro_establecimiento(this.result_establecimiento);
           console.log("REGISTRO EXISTE envia a establecimiento");
            this.navCtrl.push('EstablecimientoPage');
          }
        },
        err => {console.log("NO EXISTE REGISTRO");
        },
      );
  }

}
