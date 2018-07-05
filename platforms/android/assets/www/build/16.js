webpackJsonp([16],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_prhora_entrega_prhora_entrega__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, prlogin, direccion_entrega, alertCtrl, pr_hora_entrega) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.prlogin = prlogin;
        this.direccion_entrega = direccion_entrega;
        this.alertCtrl = alertCtrl;
        this.pr_hora_entrega = pr_hora_entrega;
        this.cuenta = {
            correo: '',
            pass: '',
            token: '',
            serial: ''
        };
        this.get_hora_entrega();
    }
    // Attempt to login in through our User service
    LoginPage.prototype.login_manual = function () {
        var _this = this;
        var login = this.cuenta.correo;
        var pass = this.cuenta.pass;
        var token = this.prlogin.getToken();
        var serial = this.prlogin.get_serial();
        alert(token + ' el serial ' + serial);
        this.prlogin.login_manual(login, pass, token, serial).subscribe(function (login) {
            _this.result_login = login;
            var result = _this.result_login;
            var mensaje = result.mensaje;
            var data = result.data;
            console.log(data);
            if (mensaje == 'NO Existe Usuario') {
                var mensaje_1 = 'Login y contraseña no validos';
                _this.loading_toast(mensaje_1);
            }
            else {
                var id_nivel = void 0;
                var id_usuario_1;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    id_nivel = value.id_nivel;
                    id_usuario_1 = value.id_usuario;
                }
                _this.prlogin.set_id_usuario(id_usuario_1);
                if (id_nivel == 1 || id_nivel == 2 || id_nivel == 3) {
                    var mensaje_2 = 'Debes ser un cliente para iniciar sesion';
                    _this.loading_toast(mensaje_2);
                }
                else {
                    localStorage.setItem('delivery_cliente', JSON.stringify(data));
                    _this.prlogin.set_inicio_sesion(data);
                    /*busca la direccion de entrega, si existe lo pasa al home, sino existe llama al modulo direccion entrega*/
                    _this.direccion_entrega.get_direccion_entrega_activo(id_usuario_1).subscribe(function (direccion_entrega) {
                        var direccion_entrega_2 = direccion_entrega;
                        var mensaje = direccion_entrega_2.mensaje;
                        console.log(direccion_entrega_2);
                        if (mensaje == 'NO existe direccion de entrega') {
                            console.log(_this.result_direccion_entrega);
                            var info = 'Informacion';
                            var msg = 'Vamos a configurar la direccion de entrega';
                            _this.show_alert(info, msg);
                        }
                        else {
                            var data_2 = direccion_entrega_2.data;
                            _this.direccion_entrega.set_variable_direccion_entrega(data_2);
                            localStorage.setItem('delivery_direccion_entrega_activa', JSON.stringify(data_2));
                            _this.get_direccion_entrega(id_usuario_1);
                            /*****************/
                            _this.navCtrl.setRoot('HomePage');
                        }
                    }, function (err) {
                        console.log("NO EXISTE REGISTRO");
                    });
                }
                console.log('entra en el else');
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.get_hora_entrega = function () {
        var _this = this;
        this.pr_hora_entrega.get_hora_entrega().subscribe(function (pr_hora_entrega) {
            _this.result_hora_entrega = pr_hora_entrega;
            console.log("REGISTRO hora de entrega");
            _this.pr_hora_entrega.set_variable_result_hora_entrega(_this.result_hora_entrega);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    LoginPage.prototype.get_direccion_entrega = function (item) {
        var _this = this;
        /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
        var id_usuario = item;
        this.direccion_entrega.get_direccion_entrega(id_usuario).subscribe(function (direccion_entrega) {
            var result_direccion_entrega = direccion_entrega;
            var data = result_direccion_entrega.data;
            console.log(data);
            localStorage.setItem('delivery_direccion_entrega', JSON.stringify(data));
            _this.direccion_entrega.set_variable_result_direccion_entrega_todas(data);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    LoginPage.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    LoginPage.prototype.show_alert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot('DireccionEntregaPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\login\login.html"*/'<ion-header >\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Iniciar Sesion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)="login_manual()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="cuenta.correo" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="cuenta.pass" name="password"></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="boton_aceptar" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_prhora_entrega_prhora_entrega__["a" /* PrhoraEntregaProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=16.js.map