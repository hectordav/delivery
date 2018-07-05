webpackJsonp([13],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoVerPageModule", function() { return PedidoVerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_ver__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoVerPageModule = (function () {
    function PedidoVerPageModule() {
    }
    PedidoVerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_ver__["a" /* PedidoVerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_ver__["a" /* PedidoVerPage */]),
            ],
        })
    ], PedidoVerPageModule);
    return PedidoVerPageModule;
}());

//# sourceMappingURL=pedido-ver.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pr_mensaje_pr_mensaje__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prpedido_prpedido__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PedidoVerPage = (function () {
    function PedidoVerPage(navCtrl, navParams, pr_pedido, alert_toast, alertCtrl, pr_mensaje) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedido = pr_pedido;
        this.alert_toast = alert_toast;
        this.alertCtrl = alertCtrl;
        this.pr_mensaje = pr_mensaje;
        this.result_pedido = {
            id_pedido: '',
            id_establecimiento: '',
            detalles_direccion_entrega: '',
            detalles_direccion_establecimiento: '',
            direccion_entrega: '',
            direccion_establecimiento: '',
            fecha: '',
            hora_entrega: '',
            lat_lng_direccion_entrega: '',
            lat_lng_establecimiento: '',
            nombre_establecimiento: '',
            nombre_usuario: '',
            token_usuario: '',
            total_precio: ''
        };
    }
    PedidoVerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoVerPage');
        this.ver_pedido();
    };
    PedidoVerPage.prototype.ver_pedido = function () {
        var pedido = this.pr_pedido.get_result_pedido();
        this.result_det_pedido = this.pr_pedido.get_result_det_pedido();
        this.result_extra_pedido = this.pr_pedido.get_result_extra_pedido();
        this.variable_extra_pedido = this.pr_pedido.get_variable_extra_pedido();
        this.result_pedido.id_pedido = pedido.id_pedido;
        this.result_pedido.id_establecimiento = pedido.id_establecimiento;
        this.result_pedido.detalles_direccion_entrega = pedido.detalles_direccion_entrega;
        this.result_pedido.detalles_direccion_establecimiento = pedido.detalles_direccion_establecimiento;
        this.result_pedido.direccion_entrega = pedido.direccion_entrega;
        this.result_pedido.direccion_establecimiento = pedido.direccion_establecimiento;
        this.result_pedido.fecha = pedido.fecha;
        this.result_pedido.hora_entrega = pedido.hora_entrega;
        this.result_pedido.lat_lng_direccion_entrega = pedido.lat_lng_direccion_entrega;
        this.result_pedido.lat_lng_establecimiento = pedido.lat_lng_establecimiento;
        this.result_pedido.nombre_establecimiento = pedido.nombre_establecimiento;
        this.result_pedido.nombre_usuario = pedido.nombre_usuario;
        this.result_pedido.token_usuario = pedido.token_usuario;
        this.result_pedido.total_precio = pedido.total_precio;
        console.log(this.result_pedido);
        this.variable_token_repartidor = this.pr_pedido.get_varibale_token_repartidor();
        console.log(this.variable_token_repartidor);
        this.variable_status_pedido = this.pr_pedido.get_variable_status_pedido();
        console.log(this.variable_status_pedido);
    };
    PedidoVerPage.prototype.mensaje_establecimiento = function () {
        var _this = this;
        var data = this.pr_pedido.get_token_empresa_pedido_seleccionado();
        var _token_usuario;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            _token_usuario = value.token_empresa;
        }
        var _id_pedido = this.result_pedido.id_pedido;
        var prompt = this.alertCtrl.create({
            title: 'Mensaje a Establecimiento',
            inputs: [
                {
                    name: 'txt_mensaje',
                    placeholder: 'Escriba su mensaje'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        var _mensaje = data.txt_mensaje;
                        console.log(_mensaje);
                        _this.pr_mensaje.enviar_mensaje_empresa(_token_usuario, _id_pedido, _mensaje).subscribe(function (pr_mensaje) {
                            var _titulo = 'Mensaje a repartidor';
                            var _mensaje = 'El mensaje fue enviado';
                            _this.alert_toast.show_alert(_titulo, _mensaje);
                            console.log("REGISTRO EXISTE");
                        }, function (err) {
                            console.log("NO EXISTE REGISTRO");
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    PedidoVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-ver',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedido-ver\pedido-ver.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="fondo color_texto">\n	<strong>Cliente</strong>\n</div>\n<div align="center">\n	<strong>\n	<h4>\n		{{result_pedido.nombre_usuario}}\n	</h4>\n</strong>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_entrega}}\n</div>\n<div padding>\n	{{result_pedido.detalles_direccion_entrega}}\n</div>\n<div class="fondo color_texto">\n	<strong>Hora de entrega:</strong>\n</div>\n<div padding align="center">\n	<h4>{{result_pedido.hora_entrega}}</h4>\n</div>\n<div class="fondo color_texto">\n	<strong>Total:</strong>\n</div>\n<div padding align="center">\n	<h4>MNX {{result_pedido.total_precio | number : \'1.2-2\'}}</h4>\n</div>\n	<div class="fondo color_texto">\n	<strong>Detalles de Pedido</strong>\n</div>\n<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_det_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.cantidad}}</ion-col>\n					<ion-col col-8>\n						<strong>{{item.descripcion}}</strong>\n					</ion-col>\n					<ion-col col-2>MNX {{item.total | number : \'1.2-2\'}}\n					</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n<div *ngIf="variable_extra_pedido==1">\n		<div class="fondo color_texto">\n	<strong>Extras</strong>\n</div>\n	<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_extra_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.descripcion_extra}}</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n</div>\n\n<ion-fab right bottom>\n    <button ion-fab color="boton_pedido_descripcion"><ion-icon name="md-add"></ion-icon></button>\n    <ion-fab-list side="top">\n    	<div *ngIf="variable_token_repartidor==1">\n      <button ion-fab color="primary" (click)="mensaje_repartidor()"><ion-icon name="chatboxes"></ion-icon></button>	\n    	</div>\n      <button ion-fab color="primary" (click)="mensaje_establecimiento()"><ion-icon name="md-chatboxes"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedido-ver\pedido-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_pr_mensaje_pr_mensaje__["a" /* PrMensajeProvider */]])
    ], PedidoVerPage);
    return PedidoVerPage;
}());

//# sourceMappingURL=pedido-ver.js.map

/***/ })

});
//# sourceMappingURL=13.js.map