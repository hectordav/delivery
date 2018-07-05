webpackJsonp([9],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoSeleccionadoPageModule", function() { return ProductoSeleccionadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_seleccionado__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoSeleccionadoPageModule = (function () {
    function ProductoSeleccionadoPageModule() {
    }
    ProductoSeleccionadoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_seleccionado__["a" /* ProductoSeleccionadoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_seleccionado__["a" /* ProductoSeleccionadoPage */]),
            ],
        })
    ], ProductoSeleccionadoPageModule);
    return ProductoSeleccionadoPageModule;
}());

//# sourceMappingURL=producto-seleccionado.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoSeleccionadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_srv_alert_toast__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoSeleccionadoPage = (function () {
    function ProductoSeleccionadoPage(navCtrl, navParams, pedido, modalctrl, viewCtrl, alertCtrl, alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pedido = pedido;
        this.modalctrl = modalctrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.alert_toast = alert_toast;
    }
    ProductoSeleccionadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoSeleccionadoPage');
        this.productos_seleccionados();
    };
    ProductoSeleccionadoPage.prototype.productos_seleccionados = function () {
        this.result_producto_seleccionado = this.pedido.get_variable_pedido();
    };
    ProductoSeleccionadoPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    ProductoSeleccionadoPage.prototype.borrar_item = function (item) {
        var _this = this;
        var _id_producto_item = item.id_producto;
        var _cantidad = item.cantidad;
        var prompt = this.alertCtrl.create({
            title: 'Borrar Producto',
            message: "Ingrese la cantidad a borrar",
            inputs: [
                {
                    name: 'txt_borrar',
                    placeholder: ''
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
                    text: 'Borrar',
                    handler: function (data) {
                        var _cantidad_borrar = data.txt_borrar;
                        console.log(_cantidad_borrar);
                        var _cantidad_entero = parseInt(_cantidad_borrar);
                        if (_cantidad_entero > _cantidad) {
                            var _mensaje = "Esta ingresando una cantidad mayor a la registrada";
                            _this.alert_toast.loading_toast(_mensaje);
                        }
                        else {
                            var _cantidad_nueva = _cantidad - _cantidad_borrar;
                            var _total_producto = item.total / _cantidad;
                            var _total = _total_producto * _cantidad_nueva;
                            var det_pedido = _this.pedido.get_variable_pedido();
                            var i = 0;
                            var _cantidad_registrada = void 0;
                            for (var _i = 0, det_pedido_1 = det_pedido; _i < det_pedido_1.length; _i++) {
                                var value = det_pedido_1[_i];
                                var _id_producto = value.id_producto;
                                _cantidad_registrada = value.cantidad;
                                if (_id_producto == _id_producto_item) {
                                    console.log('lo resta');
                                    det_pedido.splice(i, 1);
                                }
                                i++;
                            }
                            if (_cantidad_nueva != 0) {
                                det_pedido.push({
                                    id_producto: item.id_producto,
                                    nombre: item.nombre,
                                    cantidad: _cantidad_nueva,
                                    total: _total
                                });
                            }
                            _this.pedido.set_variable_pedido(det_pedido);
                            _this.productos_seleccionados();
                            _this.sumar_total();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ProductoSeleccionadoPage.prototype.sumar_total = function () {
        var _det_pedido = this.result_producto_seleccionado;
        var _cantidad_productos = 0;
        var _total_productos = 0;
        for (var _i = 0, _det_pedido_1 = _det_pedido; _i < _det_pedido_1.length; _i++) {
            var value = _det_pedido_1[_i];
            _cantidad_productos = _cantidad_productos + value.cantidad;
            _total_productos = _total_productos + parseInt(value.total);
        }
        this.pedido.set_variable_items(_cantidad_productos);
        this.pedido.set_variable_total(_total_productos);
    };
    ProductoSeleccionadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-seleccionado',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-seleccionado\producto-seleccionado.html"*/'<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Productos en Cesta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n			<ion-grid>\n					<div align="center">\n						<ion-row>\n							<ion-col><ion-badge>Producto</ion-badge></ion-col>\n							<ion-col><ion-badge item-end>Cantidad</ion-badge></ion-col>\n							<ion-col><ion-badge item-end>Total</ion-badge></ion-col>\n							<ion-col><ion-badge item-end>Acciones</ion-badge></ion-col>\n						</ion-row>\n					</div>\n					<hr>\n			</ion-grid>	\n			<div *ngFor="let item of result_producto_seleccionado">\n						<div align="center">\n							<ion-row>\n								<ion-col>{{item.nombre}}</ion-col>\n								<ion-col>{{item.cantidad}}</ion-col>\n								<ion-col>{{item.total}}</ion-col>\n								<ion-col (click)="borrar_item(item)"><ion-badge>Borrar</ion-badge></ion-col>\n							</ion-row>\n						</div>\n			</div>\n</ion-content>\n<ion-footer>\n	<ion-footer>\n   <div align="center">\n		<button ion-button full color="danger" large icon-left (click)="cerrar()">\n				Cerrar\n		</button>\n	</div>\n</ion-footer>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-seleccionado\producto-seleccionado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_srv_alert_toast__["a" /* SrvalerttoastService */]])
    ], ProductoSeleccionadoPage);
    return ProductoSeleccionadoPage;
}());

//# sourceMappingURL=producto-seleccionado.js.map

/***/ })

});
//# sourceMappingURL=9.js.map