webpackJsonp([12],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosHistorialPageModule", function() { return PedidosHistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_historial__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosHistorialPageModule = (function () {
    function PedidosHistorialPageModule() {
    }
    PedidosHistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos_historial__["a" /* PedidosHistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos_historial__["a" /* PedidosHistorialPage */]),
            ],
        })
    ], PedidosHistorialPageModule);
    return PedidosHistorialPageModule;
}());

//# sourceMappingURL=pedidos-historial.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosHistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PedidosHistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosHistorialPage = (function () {
    function PedidosHistorialPage(navCtrl, navParams, pr_pedidos, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedidos = pr_pedidos;
        this.alert_toast = alert_toast;
    }
    PedidosHistorialPage.prototype.ionViewDidEnter = function () {
        this.historial_pedidos();
    };
    PedidosHistorialPage.prototype.historial_pedidos = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('delivery_cliente'));
        console.log(data);
        var data_cliente = {
            id_usuario: ''
        };
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var value = data_1[_i];
            data_cliente.id_usuario = value.id_usuario;
        }
        var mens = 'Cargando pedidos';
        this.alert_toast.show_loading(mens);
        this.pr_pedidos.get_pedido_id_usuario(data_cliente).subscribe(function (pr_pedidos) {
            var pedido = pr_pedidos;
            var mensaje = pedido.mensaje;
            if (mensaje == 'NO existen pedidos') {
                var mensaje_1 = 'No existen pedidos';
                _this.alert_toast.mensaje_toast_pie(mensaje_1);
            }
            else {
                _this.result_pedidos = pedido.data;
                console.log(_this.result_pedidos);
            }
            _this.alert_toast.dismis_loading();
            console.log("REGISTRO EXISTE pr_pedidos");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidosHistorialPage.prototype.ver_pedido = function (item) {
        var _this = this;
        var _id_pedido = item.id_pedido;
        this.pr_pedidos.set_variable_status_pedido(item.id_status_pedido);
        this.pr_pedidos.set_result_pedido(item);
        var mensaje = 'Cargando detalle de pedido';
        this.alert_toast.show_loading(mensaje);
        this.pr_pedidos.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
            var result_det_pedido = pr_pedido;
            _this.pr_pedidos.set_result_det_pedido(result_det_pedido);
            console.log("REGISTRO EXISTE");
            _this.pr_pedidos.get_extra_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedidos) {
                var result_extra_pedido = pr_pedidos;
                var mensaje = result_extra_pedido.mensaje;
                console.log("REGISTRO EXISTE pr_pedidos");
                if (mensaje == 'Existe extra pedido') {
                    var data = result_extra_pedido.data;
                    _this.pr_pedidos.set_variable_extra_pedido(1);
                    _this.pr_pedidos.set_result_extra_pedido(data);
                    _this.alert_toast.dismis_loading();
                }
                else {
                    _this.pr_pedidos.set_variable_extra_pedido(0);
                    _this.alert_toast.dismis_loading();
                }
                /*el token del repartidor*/
                _this.pr_pedidos.get_token_usuario_repartidor_id_pedido(_id_pedido).subscribe(function (pr_pedidos) {
                    var result_token = pr_pedidos;
                    var mensaje = result_token.mensaje;
                    console.log(_id_pedido);
                    if (mensaje == 'no existe repartidor asignado') {
                        var mensaje_2 = 'Este pedido no tiene un repartidor asignado';
                        _this.alert_toast.mensaje_toast_pie(mensaje_2);
                        _this.pr_pedidos.set_varibale_token_repartidor(0);
                    }
                    else {
                        var data = result_token.data;
                        _this.pr_pedidos.set_token_repartidor_pedido_seleccionado(data);
                        _this.pr_pedidos.set_varibale_token_repartidor(1);
                        console.log("REGISTRO EXISTE pr_pedidos");
                    }
                }, function (err) {
                    console.log("NO EXISTE REGISTRO");
                });
                /*************************/
                /*el token empresa*/
                _this.pr_pedidos.get_token_usuario_empresa_id_pedido(_id_pedido).subscribe(function (pr_pedidos) {
                    var result_token = pr_pedidos;
                    var mensaje = result_token.mensaje;
                    console.log(_id_pedido);
                    if (mensaje == 'no existe usuario empresa asignado') {
                        var mensaje_3 = 'no existe usuario empresa asignado';
                        _this.alert_toast.mensaje_toast_pie(mensaje_3);
                        _this.pr_pedidos.set_variable_token_empresa(0);
                        _this.navCtrl.push('PedidoVerPage');
                    }
                    else {
                        var data = result_token.data;
                        console.log(data);
                        _this.pr_pedidos.set_token_empresa_pedido_seleccionado(data);
                        _this.pr_pedidos.set_variable_token_empresa(1);
                        _this.navCtrl.push('PedidoVerPage');
                        console.log("REGISTRO EXISTE pr_pedidos");
                    }
                }, function (err) {
                    console.log("NO EXISTE REGISTRO");
                });
                /*************************/
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidosHistorialPage.prototype.calificar_pedido = function (item) {
        var id_pedido = item.id_pedido;
        this.pr_pedidos.set_id_pedido(id_pedido);
        this.navCtrl.push('CalificarPedidoPage');
    };
    PedidosHistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos-historial',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedidos-historial\pedidos-historial.html"*/'<!--\n  Generated template for the PedidosHistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="color_nav_bar">\n  	<button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Historial de pedidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-content padding class="fondo">\n	  <!-- el component lo escondo para que no muestre el mapa ojo-->\n	  <div *ngFor="let item of result_pedidos">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Pedido: # {{item.id_pedido}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="home" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_usuario}}</h5>\n              <h5>\n              <strong>Direccion:</strong> {{item.direccion_entrega}}\n              </h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-calendar" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Fecha:</strong> {{item.fecha | date:\'dd/MM/yyyy\'}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="clock" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Hora de entrega:</strong> {{item.hora_entrega}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="ios-stats" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>status:</strong> {{item.status}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      \n      <div *ngIf="item.id_califica==null && item.status==\'pedido entregado a cliente\' ;else otro">\n        <hr>\n        <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div align="center">\n             <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n              <ion-icon name=\'eye\'></ion-icon>\n              Ver\n            </button>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div align="center">\n             <button ion-button small color="primary" icon-start (click)="calificar_pedido(item)">\n              <ion-icon name=\'ios-checkmark\'></ion-icon>\n              Calificar\n            </button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </div>\n      <ng-template #otro>\n        <hr>\n        <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n           Ver\n          </button>\n        </div>\n        \n        \n      <br>\n      </ng-template>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\pedidos-historial\pedidos-historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */]])
    ], PedidosHistorialPage);
    return PedidosHistorialPage;
}());

//# sourceMappingURL=pedidos-historial.js.map

/***/ })

});
//# sourceMappingURL=12.js.map