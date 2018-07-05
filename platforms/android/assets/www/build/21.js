webpackJsonp([21],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientoSeleccionadoPageModule", function() { return EstablecimientoSeleccionadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__establecimiento_seleccionado__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstablecimientoSeleccionadoPageModule = (function () {
    function EstablecimientoSeleccionadoPageModule() {
    }
    EstablecimientoSeleccionadoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__establecimiento_seleccionado__["a" /* EstablecimientoSeleccionadoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__establecimiento_seleccionado__["a" /* EstablecimientoSeleccionadoPage */]),
            ],
        })
    ], EstablecimientoSeleccionadoPageModule);
    return EstablecimientoSeleccionadoPageModule;
}());

//# sourceMappingURL=establecimiento-seleccionado.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstablecimientoSeleccionadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prestablecimiento_prestablecimiento__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prrutas_prrutas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prpedido_prpedido__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_srv_alert_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_prlogin_prlogin__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EstablecimientoSeleccionadoPage = (function () {
    function EstablecimientoSeleccionadoPage(navCtrl, navParams, prproducto, prestablecimiento, ruta, _sanitizer, pr_pedido, alert_toast, alertCtrl, modalCtrl, pr_direccion_entrega, pr_login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prproducto = prproducto;
        this.prestablecimiento = prestablecimiento;
        this.ruta = ruta;
        this._sanitizer = _sanitizer;
        this.pr_pedido = pr_pedido;
        this.alert_toast = alert_toast;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.pr_direccion_entrega = pr_direccion_entrega;
        this.pr_login = pr_login;
        this.result_id_establecimiento = {
            id_establecimiento: '',
            hora: '',
            estado: '',
            nombre: '',
            comision: '',
            distancia: '',
            imagen: '',
            extra: ''
        };
        this.det_pedido = [];
        this.ruta_imagen = this.ruta.get_ruta_web();
    }
    EstablecimientoSeleccionadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstablecimientoSeleccionadoPage');
        this.get_establecimiento();
        this.setBackButtonAction();
    };
    EstablecimientoSeleccionadoPage.prototype.ionViewDidEnter = function () {
        this.items = this.pr_pedido.get_variable_items();
        if (this.items == '') {
            this.valor_item = 0;
        }
        else {
            this.total = this.pr_pedido.get_variable_total().toFixed(2);
            this.valor_item = 1;
        }
    };
    //Method to override the default back button action
    EstablecimientoSeleccionadoPage.prototype.setBackButtonAction = function () {
        var _this = this;
        var det_pedido = this.pr_pedido.get_variable_pedido();
        console.log(det_pedido.length);
        this.navBar.backButtonClick = function () {
            if (det_pedido.length != 0) {
                var _titulo = 'Advertencia';
                var accion_1;
                var _mensaje = 'Al Salir, se borrará el pedido en curso, desea continuar?';
                var alert_1 = _this.alertCtrl.create({
                    title: _titulo,
                    message: _mensaje,
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: function () {
                                accion_1 = 0;
                            }
                        },
                        {
                            text: 'Si',
                            handler: function () {
                                console.log('entra en 1');
                                var _det_pedido = _this.pr_pedido.get_variable_pedido();
                                var _det_extra_pedido = _this.pr_pedido.get_variable_extra_det_pedido();
                                _det_pedido.splice(0, _det_pedido.length);
                                _det_extra_pedido.splice(0, _det_extra_pedido.length);
                                console.log(_det_pedido);
                                var _item = '';
                                _this.pr_pedido.set_variable_items(_item);
                                _this.pr_pedido.set_variable_total(_item);
                                _this.pr_pedido.set_variable_pedido(_det_pedido);
                                _this.pr_pedido.set_variable_extra_det_pedido(_det_extra_pedido);
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    EstablecimientoSeleccionadoPage.prototype.get_pedido = function () {
        this.det_pedido = this.pr_pedido.get_variable_pedido();
    };
    EstablecimientoSeleccionadoPage.prototype.modal_productos_seleccionados = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ProductoSeleccionadoPage');
        /*si sale de la modal, actualiza el precio y los items de los productos seleccionados.*/
        modal.onDidDismiss(function (data) {
            _this.items = _this.pr_pedido.get_variable_items();
            if (_this.items == '') {
                _this.valor_item = 0;
            }
            else {
                _this.total = _this.pr_pedido.get_variable_total().toFixed(2);
                _this.valor_item = 1;
            }
        });
        modal.present();
    };
    EstablecimientoSeleccionadoPage.prototype.get_establecimiento = function () {
        var _result_id_establecimiento = this.prestablecimiento.get_result_id_establecimiento();
        this.result_id_establecimiento.id_establecimiento = _result_id_establecimiento.id_establecimiento;
        this.result_id_establecimiento.id_recargo = _result_id_establecimiento.id_recargo;
        this.result_id_establecimiento.hora = _result_id_establecimiento.hora_establecimiento;
        this.result_id_establecimiento.estado = _result_id_establecimiento.estado;
        this.result_id_establecimiento.nombre = _result_id_establecimiento.nombre;
        this.result_id_establecimiento.comision = _result_id_establecimiento.comision;
        this.result_id_establecimiento.distancia = _result_id_establecimiento.distancia;
        this.result_id_establecimiento.imagen = _result_id_establecimiento.imagen;
        this.result_id_establecimiento.extra = _result_id_establecimiento.extra;
        this.prestablecimiento.set_comision_establecimiento(this.result_id_establecimiento.comision);
        this.result_producto = this.prproducto.get_result_producto_establecimiento();
        console.log(this.result_id_establecimiento);
        console.log(this.result_producto);
    };
    EstablecimientoSeleccionadoPage.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + (this.ruta_imagen + image) + ")");
    };
    EstablecimientoSeleccionadoPage.prototype.get_producto_id_producto = function (item) {
        var _this = this;
        console.log(item);
        var _id_producto = item.id_producto;
        var _extra = item.extra;
        this.prproducto.set_result_producto_id_producto(item);
        this.prproducto.get_tamano_producto(_id_producto).subscribe(function (prproducto) {
            _this.result_tamano_producto = prproducto;
            console.log("REGISTRO EXISTE");
            _this.prproducto.set_result_tamano_id_producto(_this.result_tamano_producto);
            /*****************************/
            if (_extra == 1) {
                _this.prproducto.get_extra_id_producto(_id_producto).subscribe(function (prproducto) {
                    _this.result_extra_producto = prproducto;
                    _this.prproducto.set_result_extra_id_producto(_this.result_extra_producto);
                    console.log("REGISTRO EXISTE");
                }, function (err) {
                    console.log("NO EXISTE REGISTRO");
                });
            }
            _this.navCtrl.push('ProductoDescripcionPage');
            /*****************************/
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    EstablecimientoSeleccionadoPage.prototype.procesar_pedido = function () {
        var _this = this;
        var _titulo = 'Procesar Pedido';
        var _mensaje = 'Desea Continuar?';
        var alert = this.alertCtrl.create({
            title: _titulo,
            message: _mensaje,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelo');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Procesa el pedido');
                        _this.procesa_pedido();
                    }
                }
            ]
        });
        alert.present();
    };
    EstablecimientoSeleccionadoPage.prototype.procesa_pedido = function () {
        var _this = this;
        var _total = this.pr_pedido.get_variable_total();
        var _total_items = this.pr_pedido.get_variable_items();
        var _id_direccion_entrega = this.pr_direccion_entrega.get_variable_id_direccion_entrega_activa();
        var _id_recargo = this.result_id_establecimiento.id_recargo;
        var _id_usuario = this.pr_login.get_id_usuario();
        var _id_pedido;
        var _id_establecimiento = this.result_id_establecimiento.id_establecimiento;
        var item_alert = 'Espere por favor';
        this.alert_toast.show_loading(item_alert);
        this.pr_pedido.procesar_pedido(_id_establecimiento, _id_usuario, _id_direccion_entrega, _id_recargo, _total_items, _total).subscribe(function (pr_pedido) {
            _this.result_procesar_pedido = pr_pedido;
            console.log("se procesa el pedido");
            /*toma el id que me lo esta enviando desde el controller de pedidos*/
            _id_pedido = _this.result_procesar_pedido;
            _this.pr_pedido.set_id_pedido(_id_pedido);
            _this.get_pedido_id_pedido(_id_pedido);
            _this.procesa_det_pedido(_id_pedido);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    EstablecimientoSeleccionadoPage.prototype.procesa_det_pedido = function (item) {
        var _this = this;
        var _id_pedido = item;
        var _det_pedido = this.pr_pedido.get_variable_pedido();
        var i = 0;
        for (var _i = 0, _det_pedido_1 = _det_pedido; _i < _det_pedido_1.length; _i++) {
            var value = _det_pedido_1[_i];
            var id_pedido = _id_pedido;
            var id_producto = value.id_producto;
            var nombre = value.nombre;
            var cantidad = value.cantidad;
            var total = value.total;
            this.pr_pedido.guardar_det_pedido(id_pedido, id_producto, nombre, cantidad, total).subscribe(function (pr_pedido) {
                _this.result_det_pedido = pr_pedido;
                i++;
                console.log("se guarda el detalle de pedido ", i);
                console.log(i);
                if (i == _det_pedido.length) {
                    _this.procesar_extra_pedido(_id_pedido);
                }
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }
    };
    EstablecimientoSeleccionadoPage.prototype.procesar_extra_pedido = function (item) {
        var _this = this;
        var _id_pedido = item;
        var _det_extra_pedido = this.pr_pedido.get_variable_extra_det_pedido();
        if (_det_extra_pedido.length == 0) {
            this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
                _this.result_det_pedido_2 = pr_pedido;
                _this.pr_pedido.set_det_pedido_procesado(_this.result_det_pedido_2);
                console.log("registro det pedido");
                _this.alert_toast.dismis_loading();
                _this.navCtrl.push('PedidoProcesadoPage');
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }
        else {
            this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
                _this.result_det_pedido_2 = pr_pedido;
                _this.pr_pedido.set_det_pedido_procesado(_this.result_det_pedido_2);
                console.log("REGISTRO det_pedido");
                for (var _i = 0, _a = _this.result_det_pedido_2; _i < _a.length; _i++) {
                    var value = _a[_i];
                    var _id_det_pedido = value.id;
                    var id_producto = value.id_producto;
                    for (var _b = 0, _det_extra_pedido_1 = _det_extra_pedido; _b < _det_extra_pedido_1.length; _b++) {
                        var value_2 = _det_extra_pedido_1[_b];
                        var _id_producto_extra = value_2.id_producto;
                        var _id_extra = value_2.id_extra;
                        if (_id_producto_extra == id_producto) {
                            _this.pr_pedido.guardar_extra_det_pedido(_id_pedido, _id_det_pedido, _id_extra).subscribe(function (pr_pedido) {
                                _this.result_extra_det_pedido = pr_pedido;
                                console.log("guarda el extra del producto");
                                _this.alert_toast.dismis_loading();
                                _this.navCtrl.push('PedidoProcesadoPage');
                            }, function (err) {
                                console.log("NO EXISTE REGISTRO");
                            });
                        }
                    }
                }
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }
    };
    EstablecimientoSeleccionadoPage.prototype.get_pedido_id_pedido = function (item) {
        var _this = this;
        var _id_pedido = item;
        console.log('entraq en get_pedido_id_pedido');
        this.pr_pedido.get_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
            _this.result_det_pedido_3 = pr_pedido;
            console.log(_this.result_det_pedido_3);
            _this.pr_pedido.set_pedido_procesado(_this.result_det_pedido_3);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], EstablecimientoSeleccionadoPage.prototype, "navBar", void 0);
    EstablecimientoSeleccionadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-establecimiento-seleccionado',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\establecimiento-seleccionado\establecimiento-seleccionado.html"*/'<!--\n  Generated template for the EstablecimientoSeleccionadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>{{result_id_establecimiento.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n			<div [style.background-image]="getBackground(this.result_id_establecimiento.imagen)">\n				<br>\n				<br>\n				<br>\n				<br>\n				<br>\n				<br>\n				<br>\n				<br>\n			 <ion-card class="inicio">\n			   <ion-card-content>\n				    <ion-card-title>\n					    <div align="center">\n						    	<p>\n					      	{{result_id_establecimiento.estado}}\n					    		</p>\n					    </div>\n				     </ion-card-title>\n					<ion-row>\n						<ion-col col-4>\n						<ion-icon name="car"></ion-icon> MNX {{result_id_establecimiento.comision}}\n						</ion-col>\n						<ion-col col-4>\n							<div align="center">\n								|\n							</div>\n						</ion-col>\n						<ion-col col-4>\n						<div align="right">\n							<ion-icon name="pin"></ion-icon> {{result_id_establecimiento.distancia}}\n						</div>\n						</ion-col>\n					</ion-row>\n			  </ion-card-content>\n			</ion-card>\n<br>\n			</div>\n	\n<!-- el producto -->\n		  <ion-list>\n		  <div *ngFor="let item_1 of result_producto">\n		  	<ion-item (click)="get_producto_id_producto(item_1)">\n		    	<ion-thumbnail item-start>\n		      	<img src="{{this.ruta_imagen}}{{item_1.imagen}}">\n		    	</ion-thumbnail>\n		    	<h2>{{item_1.nombre_producto}}</h2>\n		    	<p>{{item_1.descripcion_producto}}</p>\n		    	<p>MNX {{item_1.precio}}</p>\n		  	</ion-item>\n		  </div>\n		</ion-list>\n		  <!-- *********** -->\n</ion-content>\n<ion-footer >\n	<div *ngIf="this.valor_item==1; else other_content">\n			<ion-toolbar>\n		   <div align="center">\n				<ion-grid>\n					<ion-row >\n						<ion-col icon-left color="light" (click)="modal_productos_seleccionados()">\n							 <ion-icon name="basket"></ion-icon>\n								<ion-label>{{items}} Items</ion-label>\n						</ion-col>\n						<ion-col icon-left>\n							<ion-icon name="cash"></ion-icon>\n							<ion-label>MNX {{total}}</ion-label>\n						</ion-col>\n						<ion-col (click)="procesar_pedido()">\n							<ion-icon name="md-checkmark-circle-outline"></ion-icon>\n							<ion-label>Procesar</ion-label>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n  	</ion-toolbar>\n	</div>\n	<ng-template #other_content>\n		<ion-toolbar>\n		   <div align="center">\n				<ion-grid>\n					<ion-row>\n						<ion-col icon-left color="light">\n							 <ion-icon name="basket"></ion-icon>\n								<ion-label>0 Items</ion-label>\n						</ion-col>\n						<ion-col>\n						</ion-col>\n						<ion-col icon-left>\n							<ion-icon name="cash"></ion-icon>\n							<ion-label>MNX 0.00</ion-label>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n  	</ion-toolbar>\n	</ng-template>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\establecimiento-seleccionado\establecimiento-seleccionado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__["a" /* PrproductoEstablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prestablecimiento_prestablecimiento__["a" /* PrestablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_7__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_prlogin_prlogin__["a" /* PrloginProvider */]])
    ], EstablecimientoSeleccionadoPage);
    return EstablecimientoSeleccionadoPage;
}());

//# sourceMappingURL=establecimiento-seleccionado.js.map

/***/ })

});
//# sourceMappingURL=21.js.map