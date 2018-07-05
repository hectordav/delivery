webpackJsonp([20],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prrubro_prrubro__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prrutas_prrutas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_srv_alert_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_prrecargo_prrecargo__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_prhora_entrega_prhora_entrega__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, navParams, login, rubro, ruta, alert_toast, direccion_entrega, recargo, pr_hora_entrega) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.rubro = rubro;
        this.ruta = ruta;
        this.alert_toast = alert_toast;
        this.direccion_entrega = direccion_entrega;
        this.recargo = recargo;
        this.pr_hora_entrega = pr_hora_entrega;
        this.items = [];
        this.result_direccion_entrega = {
            id: '',
            id_usuario: '',
            id_status_direccion_entrega: '',
            detalles_direccion: '',
            direccion: '',
            lat_lng: ''
        };
        this.ruta_rubro = this.ruta.get_ruta_web();
        this.get_direccion_entrega_activo();
        this.get_recargo();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.get_rubro();
        this.get_hora_entrega();
    };
    HomePage.prototype.get_recargo = function () {
        var _this = this;
        this.recargo.get_recargo().subscribe(function (recargo) {
            _this.result_recargo = recargo;
            _this.recargo.set_result_recargo(_this.result_recargo);
            console.log('el recargo');
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.get_direccion_entrega_activo = function () {
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            this.login.set_id_usuario(value.id_usuario);
        }
        var data_direccion_entrega_activa = JSON.parse(localStorage.getItem('delivery_direccion_entrega_activa'));
        var data_direccion_entrega = JSON.parse(localStorage.getItem('delivery_direccion_entrega'));
        console.log(data_direccion_entrega_activa);
        for (var _a = 0, data_direccion_entrega_activa_1 = data_direccion_entrega_activa; _a < data_direccion_entrega_activa_1.length; _a++) {
            var value = data_direccion_entrega_activa_1[_a];
            this.result_direccion_entrega.id = value.id;
            this.result_direccion_entrega.direccion = value.direccion;
            this.direccion_entrega.set_variable_id_direccion_entrega(value.id);
        }
        this.direccion_entrega.set_variable_result_direccion_entrega_todas(data_direccion_entrega);
        this.direccion_entrega.set_variable_direccion_entrega(data_direccion_entrega);
    };
    HomePage.prototype.get_rubro = function () {
        var _this = this;
        var mens = 'Cargando';
        this.alert_toast.show_loading(mens);
        this.rubro.get_rubro().subscribe(function (rubro) {
            _this.alert_toast.dismis_loading();
            _this.result_rubro = rubro;
            console.log("REGISTRO EXISTE");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.add = function () {
        this.items.push({
            title: 'item',
            state: 'in'
        });
    };
    HomePage.prototype.remove = function () {
        this.items.splice(0, 1);
    };
    HomePage.prototype.get_hora_entrega = function () {
        var _this = this;
        this.pr_hora_entrega.get_hora_entrega().subscribe(function (pr_hora_entrega) {
            _this.result_hora_entrega = pr_hora_entrega;
            console.log("REGISTRO hora de entrega");
            _this.pr_hora_entrega.set_variable_result_hora_entrega(_this.result_hora_entrega);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.get_establecimientos_id_rubro = function (item) {
        var _this = this;
        var id_rubro = item;
        var mensaje = 'Cargando Establecimientos, espere por favor.';
        this.alert_toast.show_loading(mensaje);
        this.rubro.get_establecimientos_id_rubro(id_rubro).subscribe(function (rubro) {
            _this.result_establecimiento = rubro;
            _this.alert_toast.dismis_loading();
            if (_this.result_establecimiento == null) {
                var titulo = 'Error';
                var mensaje_1 = 'No existen establecimientos asociados';
                _this.alert_toast.show_alert(titulo, mensaje_1);
            }
            else {
                _this.rubro.set_rubro_establecimiento(_this.result_establecimiento);
                console.log("REGISTRO EXISTE envia a establecimiento");
                _this.navCtrl.push('EstablecimientoPage');
            }
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n  	<div *ngFor="let rubro of result_rubro">\n      \n      <ion-card (click)="get_establecimientos_id_rubro(rubro.id)">\n        <img class="m_agua" src="{{this.ruta_rubro}}{{rubro.imagen}}" />\n        <div class="card-title">{{rubro.descripcion}}</div>\n      </ion-card>\n     \n  	</div>\n</ion-content>\n<ion-footer class="fondo_footer">\n    <div class="fondo">\n      Direccion de entrega: \n    </div>\n  <div padding>\n    {{result_direccion_entrega.direccion}}\n  </div>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\home\home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('itemState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                    //Enter
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms linear')
                    ]),
                    //Leave
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('* => void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateX(100%)'
                    }))),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prrubro_prrubro__["a" /* PrrubroProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_7__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_6__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_prrecargo_prrecargo__["a" /* PrrecargoProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_prhora_entrega_prhora_entrega__["a" /* PrhoraEntregaProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=20.js.map