webpackJsonp([6],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prregistro_prregistro__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prlogin_prlogin__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, registro, login) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.registro = registro;
        this.login = login;
        this.cuenta = {
            curp: '',
            nombre: '',
            direccion: '',
            correo: '',
            pass: '',
            telf: ''
        };
    }
    SignupPage.prototype.registro_usuario = function () {
        var _this = this;
        var curp = this.cuenta.curp;
        var nombre = this.cuenta.nombre;
        var direccion = this.cuenta.direccion;
        var correo = this.cuenta.correo;
        var pass = this.cuenta.pass;
        var telf = this.cuenta.telf;
        var id_nivel = '4';
        /**************************/
        var token = '1'; /*this.login.getToken();*/
        var serial = '1'; /*this.login.get_serial();*/
        this.registro.guardar_usuario(curp, nombre, direccion, correo, pass, telf, token, serial, id_nivel).subscribe(function (registro) {
            _this.result_registro = registro;
            var dni;
            var login;
            for (var _i = 0, _a = _this.result_registro; _i < _a.length; _i++) {
                var value = _a[_i];
                dni = value.dni;
                login = value.login;
            }
            if (dni == curp || login == correo) {
                var mensaje = 'CURP o Login ya existen';
                _this.loading_toast(mensaje);
            }
            else {
                var mensaje = 'Usuario Guardado, ya puede inciar sesion';
                _this.loading_toast(mensaje);
                _this.navCtrl.setRoot('WelcomePage');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupPage.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Registrese</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form (submit)="registro_usuario()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>CURP</ion-label>\n        <ion-input type="text" [(ngModel)]="cuenta.curp" name="curp"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="cuenta.nombre" name="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Direccion</ion-label>\n        <ion-input type="text" [(ngModel)]="cuenta.direccion" name="direccion"></ion-input>\n      </ion-item>\n       <ion-item>\n        <ion-label floating>Telefono</ion-label>\n        <ion-input type="text" [(ngModel)]="cuenta.telf" name="telf"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="cuenta.correo" name="correo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="cuenta.pass" name="pass"></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>Registrate</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_prregistro_prregistro__["a" /* PrregistroProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_prlogin_prlogin__["a" /* PrloginProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=6.js.map