webpackJsonp([14],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProcesadoPageModule", function() { return PedidoProcesadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_procesado__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoProcesadoPageModule = (function () {
    function PedidoProcesadoPageModule() {
    }
    PedidoProcesadoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_procesado__["a" /* PedidoProcesadoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_procesado__["a" /* PedidoProcesadoPage */]),
            ],
        })
    ], PedidoProcesadoPageModule);
    return PedidoProcesadoPageModule;
}());

//# sourceMappingURL=pedido-procesado.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoProcesadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prhora_entrega_prhora_entrega__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_prestablecimiento_prestablecimiento__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_prpush_establecimiento_prpush_establecimiento__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_prpago_tarjeta_prpago_tarjeta__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_srv_alert_toast__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PedidoProcesadoPage = (function () {
    function PedidoProcesadoPage(navCtrl, navParams, pr_pedido, pr_login, pr_direccion_entrega, pr_hora_entrega, pr_establecimiento, alertCtrl, srv_alert_toast, pr_push_establecimiento, pago_tarjeta) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedido = pr_pedido;
        this.pr_login = pr_login;
        this.pr_direccion_entrega = pr_direccion_entrega;
        this.pr_hora_entrega = pr_hora_entrega;
        this.pr_establecimiento = pr_establecimiento;
        this.alertCtrl = alertCtrl;
        this.srv_alert_toast = srv_alert_toast;
        this.pr_push_establecimiento = pr_push_establecimiento;
        this.pago_tarjeta = pago_tarjeta;
    }
    PedidoProcesadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoProcesadoPage');
        this.get_pago_tarjeta();
        this.get_pedido_procesado();
        this.setBackButtonAction();
    };
    PedidoProcesadoPage.prototype.get_contar_pedido = function () {
        var _this = this;
        var _data_usuario = this.pr_login.get_inicio_sesion();
        var _id_usuario;
        for (var _i = 0, _data_usuario_1 = _data_usuario; _i < _data_usuario_1.length; _i++) {
            var value = _data_usuario_1[_i];
            _id_usuario = value.id_usuario;
        }
        this.pr_pedido.contar_pedido(_id_usuario).subscribe(function (pr_pedido) {
            _this.result_contar_pedido = pr_pedido;
            console.log("REGISTRO contar pedido");
            console.log(_this.result_contar_pedido);
            if (_this.result_contar_pedido > 1) {
                _this.variable_metodo_pago = 'Si';
            }
            else {
                _this.variable_metodo_pago = 'No';
            }
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoProcesadoPage.prototype.get_pago_tarjeta = function () {
        var _this = this;
        this.pago_tarjeta.get_pago_tarjeta().subscribe(function (pago_tarjeta) {
            _this.result_pago_tarjeta = pago_tarjeta;
            console.log("REGISTRO EXISTE");
            var _variable;
            for (var _i = 0, _a = _this.result_pago_tarjeta; _i < _a.length; _i++) {
                var value = _a[_i];
                _variable = value.pago_tarjeta;
            }
            if (_variable == 'Si') {
                _this.variable_metodo_pago = 'Si';
            }
            else {
                _this.get_contar_pedido();
            }
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoProcesadoPage.prototype.get_pedido_procesado = function () {
        /*let id_pedido=this.pr_pedido.get_id_pedido();*/
        this.result_det_pedido = this.pr_pedido.get_det_pedido_procesado();
        this.result_hora_entrega = this.pr_hora_entrega.get_variable_result_hora_entrega();
        this.result_direccion_entrega_todas = this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
        this.result_direccion_entrega_activa = this.pr_direccion_entrega.get_variable_direccion_entrega_activa();
        /*    let _id_direccion_entrega=this.pr_direccion_entrega.get_variable_id_direccion_entrega_activa();
            let direccion_entrega=this.pr_direccion_entrega.get_variable_direccion_entrega_activa();*/
        /*let det_pedido=this.pr_pedido.get_det_pedido_procesado();*/
        var pedido = this.pr_pedido.get_pedido_procesado();
        this.comision = parseFloat(this.pr_establecimiento.get_comision_establecimiento());
        for (var _i = 0, _a = this.result_direccion_entrega_activa; _i < _a.length; _i++) {
            var value = _a[_i];
            this.direccion = value.direccion;
            this.detalle_direccion = value.detalles_direccion;
        }
        for (var _b = 0, pedido_1 = pedido; _b < pedido_1.length; _b++) {
            var value = pedido_1[_b];
            this.id_establecimiento = value.id_establecimiento;
            this.total_articulos = value.total_articulos;
            this.sub_total = parseFloat(value.total_precio);
            this.total = this.sub_total + this.comision;
            this.total = this.total.toFixed(2);
        }
        console.log(this.total);
    };
    PedidoProcesadoPage.prototype.setBackButtonAction = function () {
        var _this = this;
        var det_pedido = this.pr_pedido.get_variable_pedido();
        console.log(det_pedido.length);
        this.navBar.backButtonClick = function () {
            var _titulo = 'Advertencia';
            var accion;
            var _mensaje = 'Al Salir, se borrará el pedido en la ase de datos desea continuar?';
            var alert = _this.alertCtrl.create({
                title: _titulo,
                message: _mensaje,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            accion = 0;
                        }
                    },
                    {
                        text: 'Si',
                        handler: function () {
                            console.log('entra en si');
                            var id_pedido = _this.pr_pedido.get_id_pedido();
                            _this.pr_pedido.eliminar_pedido(id_pedido).subscribe(function (pr_pedido) {
                                _this.result_pedido_eliminado = pr_pedido;
                                console.log("REGISTRO EXISTE");
                                _this.navCtrl.pop();
                            }, function (err) {
                                console.log("NO EXISTE REGISTRO");
                            });
                        }
                    }
                ]
            });
            alert.present();
        };
    };
    PedidoProcesadoPage.prototype.procesar_pedido = function () {
        var _this = this;
        var _hora_entrega = this.result_hora_entrega;
        var _id_hora_entrega = this.id_hora_entrega;
        var _id_metodo_pago = this.id_metodo_pago;
        var _id_pedido = this.pr_pedido.get_id_pedido();
        /*la hora de entrega*/
        var _hora_registrada;
        var _hora_inicio_split;
        var _hora_fin_split;
        var f = new Date();
        /*let cad=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();*/ /*la hora y los minutos*/
        var _hora_dispositivo = f.getHours(); /*11;*/
        if (_id_hora_entrega == undefined) {
            var titulo = "Error";
            var mensaje = "Seleccione Hora de entrega";
            this.srv_alert_toast.show_alert(titulo, mensaje);
        }
        else {
            if (_id_metodo_pago == undefined) {
                var titulo = "Error";
                var mensaje = "Seleccione un metodo de pago";
                this.srv_alert_toast.show_alert(titulo, mensaje);
            }
            else {
                for (var _i = 0, _hora_entrega_1 = _hora_entrega; _i < _hora_entrega_1.length; _i++) {
                    var value = _hora_entrega_1[_i];
                    var id_hora_entrega = value.id;
                    if (_id_hora_entrega == id_hora_entrega) {
                        _hora_registrada = value.descripcion.split('-');
                        _hora_inicio_split = _hora_registrada['0'].split(':');
                        _hora_fin_split = _hora_registrada['1'].split(':');
                        /*let _hora_inicio=_hora_inicio_split['0'];*/
                        var _hora_fin = _hora_fin_split['0'];
                        /*si la hora del dispositivo es mayuor a la horafinal*/
                        if (_hora_dispositivo > _hora_fin) {
                            var titulo = "Error";
                            var mensaje = "La hora actual es mayor a la hora seleccionada";
                            this.srv_alert_toast.show_alert(titulo, mensaje);
                        }
                        else {
                            /**************************************************/
                            console.log('esta en el rango de la hora');
                            var item_alert = 'Espere por favor';
                            this.srv_alert_toast.show_loading(item_alert);
                            if (_id_metodo_pago == 2) {
                                this.pr_pedido.set_id_metodo_pago(_id_metodo_pago);
                                this.pr_pedido.set_id_hora_entrega(_id_hora_entrega);
                                this.pr_pedido.set_id_pedido(_id_pedido);
                                this.pr_pedido.set_total(this.total);
                                this.srv_alert_toast.dismis_loading();
                                this.navCtrl.push('PagoPayuPage');
                            }
                            else {
                                this.pr_pedido.actualizar_pedido(_id_pedido, _id_hora_entrega, _id_metodo_pago).subscribe(function (pr_pedido) {
                                    _this.result_actualiza_pedido = pr_pedido;
                                    console.log("se ha actualizado el pedido");
                                    _this.enviar_push_establecimiento();
                                }, function (err) {
                                    console.log("NO EXISTE REGISTRO");
                                });
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
    };
    PedidoProcesadoPage.prototype.enviar_push_establecimiento = function () {
        var _this = this;
        var _id_establecimiento = this.id_establecimiento;
        this.pr_push_establecimiento.push_nuevo_pedido(_id_establecimiento).subscribe(function (pr_push_establecimiento) {
            _this.result_push_establecimiento = pr_push_establecimiento;
            console.log("Se envia el push al establecimiento");
            _this.srv_alert_toast.dismis_loading();
            var titulo = "Pedido Procesado";
            var mensaje = "Su pedido se ha procesado con éxito";
            _this.srv_alert_toast.show_alert(titulo, mensaje);
            _this.borrar_items_pedido();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoProcesadoPage.prototype.borrar_items_pedido = function () {
        var _det_pedido = this.pr_pedido.get_variable_pedido();
        var _det_extra_pedido = this.pr_pedido.get_variable_extra_det_pedido();
        _det_pedido.splice(0, _det_pedido.length);
        _det_extra_pedido.splice(0, _det_extra_pedido.length);
        console.log(_det_pedido);
        var _item = '';
        this.pr_pedido.set_variable_items(_item);
        this.pr_pedido.set_variable_total(_item);
        this.pr_pedido.set_variable_pedido(_det_pedido);
        this.pr_pedido.set_variable_extra_det_pedido(_det_extra_pedido);
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], PedidoProcesadoPage.prototype, "navBar", void 0);
    PedidoProcesadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-procesado',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedido-procesado\pedido-procesado.html"*/'<!--\n  Generated template for the PedidoProcesadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Procesar Pedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<div class="fondo color_texto">\n	<strong>Detalles de Pedido</strong>\n</div>\n<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_det_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.cantidad}}</ion-col>\n					<ion-col col-8>\n						<strong>{{item.descripcion}}</strong>\n					</ion-col>\n					<ion-col col-2>MNX {{item.total | number : \'1.2-2\'}}\n					</ion-col>\n				</ion-row>\n			</ion-item>\n</div>\n	</ion-grid>	\n</div>\n<div class="fondo color_texto">\n	<strong>Hora de entrega</strong>\n</div>\n<div>\n	 <ion-item no-lines>\n	    <ion-label>Seleccione la Hora</ion-label>\n	    <ion-select type="number" [(ngModel)]="id_hora_entrega">\n	    	<ion-option *ngFor="let item_2 of result_hora_entrega" value="{{item_2.id}}">{{item_2.descripcion}}</ion-option>\n	    	\n	    </ion-select>\n  </ion-item>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion de entrega</strong>\n</div>\n	 <ion-item no-lines>\n	 	{{direccion}}, {{detalle_direccion}}\n  </ion-item>\n\n<div class="fondo color_texto">\n	<strong>Metodo de pago</strong>\n</div>\n		<div *ngIf="variable_metodo_pago==No; else other_content">\n	<ion-item no-lines>\n			<ion-label>Seleccione el metodo de pago</ion-label>\n	    <ion-select [(ngModel)]="id_metodo_pago">\n	      <ion-option value="2">Tarjeta debito/crédito</ion-option>\n	    </ion-select>\n  </ion-item>\n		</div>\n		<ng-template #other_content>\n			<ion-item no-lines>\n			<ion-label>Seleccione el metodo de pago</ion-label>\n	    <ion-select [(ngModel)]="id_metodo_pago">\n	      <ion-option value="1">Efectivo</ion-option>\n	      <ion-option value="2">Tarjeta debito/crédito</ion-option>\n	    </ion-select>\n			</ion-item>\n		</ng-template>\n\n</ion-content>\n<ion-footer>\n		<div class="fondo color_texto">\n		<ion-grid>\n			<ion-row>\n				<ion-col col-9>Total Articulos</ion-col>\n				<ion-col align="right">{{total_articulos}}</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-9>Sub total</ion-col>\n				<ion-col align="right">{{sub_total | number : \'1.2-2\'}}</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-9>Comision</ion-col>\n				<ion-col align="right">{{comision | number : \'1.2-2\'}}</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-9><strong>TOTAL ESTIMADO</strong></ion-col>\n				<ion-col align="right"><strong>{{total}}</strong></ion-col>\n			</ion-row>\n		</ion-grid>\n		</div>\n	<button ion-button full icon-left color="boton_aceptar" (click)="procesar_pedido()">\n		<div class="color_texto">\n		<ion-label color="light">\n  		<ion-icon name="checkmark-circle-outline" class="tamano_icon" color="light" icon-left></ion-icon>\n			Finalizar Pedido\n		</ion-label>\n			\n		</div>\n	</button>\n</ion-footer>	'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedido-procesado\pedido-procesado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_prhora_entrega_prhora_entrega__["a" /* PrhoraEntregaProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_prestablecimiento_prestablecimiento__["a" /* PrestablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_7__providers_prpush_establecimiento_prpush_establecimiento__["a" /* PrpushEstablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_prpago_tarjeta_prpago_tarjeta__["a" /* PrpagoTarjetaProvider */]])
    ], PedidoProcesadoPage);
    return PedidoProcesadoPage;
}());

//# sourceMappingURL=pedido-procesado.js.map

/***/ })

});
//# sourceMappingURL=14.js.map