webpackJsonp([22],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionEntregaRegistradasPageModule", function() { return DireccionEntregaRegistradasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direccion_entrega_registradas__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DireccionEntregaRegistradasPageModule = (function () {
    function DireccionEntregaRegistradasPageModule() {
    }
    DireccionEntregaRegistradasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__direccion_entrega_registradas__["a" /* DireccionEntregaRegistradasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__direccion_entrega_registradas__["a" /* DireccionEntregaRegistradasPage */]),
            ],
        })
    ], DireccionEntregaRegistradasPageModule);
    return DireccionEntregaRegistradasPageModule;
}());

//# sourceMappingURL=direccion-entrega-registradas.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DireccionEntregaRegistradasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DireccionEntregaRegistradasPage = (function () {
    function DireccionEntregaRegistradasPage(navCtrl, navParams, pr_direccion_entrega, login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_direccion_entrega = pr_direccion_entrega;
        this.login = login;
    }
    DireccionEntregaRegistradasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DireccionEntregaRegistradasPage');
        this.get_direccion_entrega_todas();
    };
    DireccionEntregaRegistradasPage.prototype.get_direccion_entrega_todas = function () {
        this.result_direccion_entrega_todas = this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
        console.log(this.result_direccion_entrega_todas);
    };
    DireccionEntregaRegistradasPage.prototype.seleccionar_direccion = function (item) {
        var _this = this;
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        var _id_direccion_entrega = item.id;
        var _id_usuario;
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            _id_usuario = value.id_usuario;
        }
        this.pr_direccion_entrega.activar_direccion_entrega(_id_usuario, _id_direccion_entrega).subscribe(function (pr_direccion_entrega) {
            _this.result_direccion_entrega = pr_direccion_entrega;
            console.log("REGISTRO guardado direccion entrega");
            _this.get_direccion_entrega();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    DireccionEntregaRegistradasPage.prototype.nueva_direccion = function () {
        this.navCtrl.push('DireccionEntregaPage');
    };
    DireccionEntregaRegistradasPage.prototype.eliminar_direccion = function (item) {
        var _this = this;
        var _id_direccion_entrega = item.id;
        this.pr_direccion_entrega.eliminar_direccion_entrega(_id_direccion_entrega).subscribe(function (pr_direccion_entrega) {
            _this.result_eliminar_direccion = pr_direccion_entrega;
            console.log("REGISTRO EXISTE");
            _this.get_direccion_entrega();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    DireccionEntregaRegistradasPage.prototype.get_direccion_entrega = function () {
        var _this = this;
        /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        var _id_usuario;
        for (var _i = 0, result_login_2 = result_login; _i < result_login_2.length; _i++) {
            var value = result_login_2[_i];
            _id_usuario = value.id_usuario;
        }
        this.pr_direccion_entrega.get_direccion_entrega(_id_usuario).subscribe(function (direccion_entrega) {
            var data_direccion_entrega = direccion_entrega;
            var mensaje = data_direccion_entrega.mensaje;
            var data = data_direccion_entrega.data;
            localStorage.setItem('delivery_direccion_entrega', JSON.stringify(data));
            if (mensaje == 'existen direccion de entrega') {
                _this.direccion_entrega_activa();
                _this.pr_direccion_entrega.set_variable_result_direccion_entrega_todas(data);
                _this.result_direccion_entrega_todas = _this.pr_direccion_entrega.get_variable_result_direccion_entrega_todas();
            }
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    DireccionEntregaRegistradasPage.prototype.direccion_entrega_activa = function () {
        var _this = this;
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        var _id_usuario;
        for (var _i = 0, result_login_3 = result_login; _i < result_login_3.length; _i++) {
            var value = result_login_3[_i];
            _id_usuario = value.id_usuario;
        }
        this.pr_direccion_entrega.get_direccion_entrega_activo(_id_usuario).subscribe(function (direccion_entrega) {
            var direccion_entrega_2 = direccion_entrega;
            console.log(direccion_entrega_2);
            var data = direccion_entrega_2.data;
            localStorage.setItem('delivery_direccion_entrega_activa', JSON.stringify(data));
            _this.pr_direccion_entrega.set_variable_direccion_entrega(data);
            /*****************/
            _this.navCtrl.setRoot('HomePage');
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    DireccionEntregaRegistradasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-direccion-entrega-registradas',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\direccion-entrega-registradas\direccion-entrega-registradas.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n  	<button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n  </button>\n    <ion-title>Direcciones registradas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n	<div *ngFor="let item of result_direccion_entrega_todas">	\n		<ion-card>\n			<ion-card-header text-wrap>\n				{{item.direccion}}\n				<p>\n				{{item.detalles_direccion}}	\n				</p>\n			</ion-card-header>\n			<ion-card-content>\n						<ion-grid>\n							<ion-row>\n								<ion-col col-5>\n								</ion-col>\n								<ion-col col-2></ion-col>\n								<ion-col col-5>\n									<button ion-button (click)="seleccionar_direccion(item)">Seleccionar</button>\n								</ion-col>\n							</ion-row>\n					</ion-grid>\n			</ion-card-content>\n		</ion-card>\n	</div>\n</ion-content>\n<ion-footer padding>\n	<button ion-button full color="boton_pedido_descripcion" (click)="nueva_direccion()">Nueva Direccion</button>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\direccion-entrega-registradas\direccion-entrega-registradas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */]])
    ], DireccionEntregaRegistradasPage);
    return DireccionEntregaRegistradasPage;
}());

//# sourceMappingURL=direccion-entrega-registradas.js.map

/***/ })

});
//# sourceMappingURL=22.js.map