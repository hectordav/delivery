webpackJsonp([3],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionEntregaPageModule", function() { return DireccionEntregaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direccion_entrega__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_map__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DireccionEntregaPageModule = (function () {
    function DireccionEntregaPageModule() {
    }
    DireccionEntregaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__direccion_entrega__["a" /* DireccionEntregaPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__direccion_entrega__["a" /* DireccionEntregaPage */]),
            ],
        })
    ], DireccionEntregaPageModule);
    return DireccionEntregaPageModule;
}());

//# sourceMappingURL=direccion-entrega.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DireccionEntregaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_srv_alert_toast__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DireccionEntregaPage = (function () {
    function DireccionEntregaPage(navCtrl, navParams, login, geocode, alertCtrl, direccion_entrega, aler_toast, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.geocode = geocode;
        this.alertCtrl = alertCtrl;
        this.direccion_entrega = direccion_entrega;
        this.aler_toast = aler_toast;
        this.modalCtrl = modalCtrl;
        this.address = {
            place: '',
            det_direccion: ''
        };
    }
    DireccionEntregaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DireccionEntregaPage');
        this.map = this.createMap();
    };
    DireccionEntregaPage.prototype.createMap = function (location) {
        var _this = this;
        if (location === void 0) { location = new google.maps.LatLng(25.686614, -100.316113); }
        var mapOptions = {
            center: location,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var mapEl = document.getElementById('map');
        var map = new google.maps.Map(mapEl, mapOptions);
        // use GPS to get center position
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.g_lat_home = _this.login.getMylat_home();
            _this.g_lng_home = _this.login.getMylng_home();
            _this.g_latitud = position.coords.latitude;
            _this.g_longitud = position.coords.longitude;
            _this.login.setMylat(_this.g_latitud);
            _this.login.setMylng(_this.g_longitud);
            _this.lat_lng = newLatLng;
            console.log(_this.lat_lng);
            _this.map.setCenter(newLatLng);
        });
        return map;
    };
    DireccionEntregaPage.prototype.la_direccion = function () {
        var _this = this;
        console.log('entra en la direccion');
        this.g_lat_i = this.login.getMylat();
        this.g_lng_i = this.login.getMylng();
        this.geocode.reverseGeocode(this.g_lat_i, this.g_lng_i)
            .then(function (result) {
            _this.address.place = result.thoroughfare;
            /* alert(this.address.place);*/
        })
            .catch(function (error) { return console.log(error); });
    };
    DireccionEntregaPage.prototype.guardar_direccion = function () {
        var _this = this;
        console.log('guarda la direccion');
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        var id_usuario;
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            id_usuario = value.id_usuario;
        }
        var lat_lng = this.g_lat_i + ',' + this.g_lng_i;
        var direccion = this.address.place;
        var det_direccion = this.address.det_direccion;
        console.log(det_direccion);
        if (det_direccion == '') {
            var titulo = 'Error';
            var mensaje = 'Debe Guardar un Detalle de Direccion';
            this.aler_toast.show_alert(titulo, mensaje);
        }
        else {
            this.direccion_entrega.guardar_direccion_entrega(id_usuario, lat_lng, direccion, det_direccion).subscribe(function (direccion_entrega) {
                _this.result_direccion_entrega = direccion_entrega;
                var titulo = 'Guardar';
                var mensaje = 'Direccion Guardada';
                _this.aler_toast.show_alert(titulo, mensaje);
                _this.get_direccion_entrega();
            }, function (err) {
                console.log("NO EXISTE REGISTRO");
            });
        }
    };
    DireccionEntregaPage.prototype.autocompletar = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AutocompletePage');
        /*si sale de la modal, actualiza el precio y los items de los productos seleccionados.*/
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.address.place = data.description;
                _this.getPlaceDetail_i(data.place_id);
            }
        });
        modal.present();
    };
    DireccionEntregaPage.prototype.getPlaceDetail_i = function (place_id) {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                /* self.placedetails.address = place.formatted_address;*/
                /*                let algo=place.formatted_address;
                */ console.log(place.geometry.location.lat());
                self.g_lat_i = place.geometry.location.lat();
                self.g_lng_i = place.geometry.location.lng();
                console.log(self.g_lat_i);
                console.log(self.g_lng_i);
                self.address.set = true;
                /*console.log('page > getPlaceDetail > details > ', self.placedetails);*/
            }
            else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    };
    DireccionEntregaPage.prototype.get_direccion_entrega = function () {
        var _this = this;
        /*esta direccion son todas las direcciones registradas por el usuario para mostrarlas en el pedido procesado*/
        var result_login = JSON.parse(localStorage.getItem('delivery_cliente'));
        var _id_usuario;
        for (var _i = 0, result_login_2 = result_login; _i < result_login_2.length; _i++) {
            var value = result_login_2[_i];
            _id_usuario = value.id_usuario;
        }
        this.direccion_entrega.get_direccion_entrega(_id_usuario).subscribe(function (direccion_entrega) {
            var data_direccion_entrega = direccion_entrega;
            var mensaje = data_direccion_entrega.mensaje;
            var data = data_direccion_entrega.data;
            if (mensaje == 'existen direccion de entrega') {
                localStorage.setItem('delivery_direccion_entrega', JSON.stringify(data));
                _this.direccion_entrega.set_variable_result_direccion_entrega_todas(data);
                _this.navCtrl.setRoot('HomePage');
            }
            console.log("REGISTRO EXISTE");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    DireccionEntregaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-direccion-entrega',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\direccion-entrega\direccion-entrega.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n  	<ion-item no-lines>\n       <ion-icon name="ios-arrow-back" item-left></ion-icon> \n       <ion-icon name="create" item-right (click)="guardar_direccion()"></ion-icon>\n    <ion-title>Direccion de entrega</ion-title>\n  	</ion-item>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- el component -->\n	<map></map>\n  <!-- el mapa escondido -->\n  <div style="display: none">\n    <div id="map"></div>\n  </div>\n</ion-content>\n<ion-footer class="toolbar-ios-button-font-size>">\n    <div class="fondo color_texto">\n      Direccion de entrega\n    </div>\n    <ion-item no-lines (click)="autocompletar()" text-wrap>\n        <ion-icon name="ios-pin" item-start></ion-icon>\n        {{address.place}}\n    </ion-item>\n    <div class="fondo" >\n      Detalles de la Direccion\n    </div>\n    <ion-item no-lines>\n      <ion-icon name="ios-checkmark-circle" item-start></ion-icon>\n        <ion-input name="txt_inicio" [(ngModel)]="address.det_direccion" placeholder="Piso, puerta, etc" text-input type="text"></ion-input>\n    </ion-item>\n \n  </ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\direccion-entrega\direccion-entrega.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */], __WEBPACK_IMPORTED_MODULE_5__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], DireccionEntregaPage);
    return DireccionEntregaPage;
}());

//# sourceMappingURL=direccion-entrega.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_direccion_entrega_direccion_entrega__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(login, geocode, direccion_entrega, pr_direccion_entrega) {
        this.login = login;
        this.geocode = geocode;
        this.direccion_entrega = direccion_entrega;
        this.pr_direccion_entrega = pr_direccion_entrega;
        console.log('Hello MapComponent Component');
    }
    MapComponent.prototype.ngOnInit = function () {
        this.g_lat_home = this.login.getMylat_home();
        this.g_lng_home = this.login.getMylng_home();
        this.map = this.createMap();
    };
    MapComponent.prototype.createMap = function (location) {
        var _this = this;
        if (location === void 0) { location = new google.maps.LatLng(25.686614, -100.316113); }
        var mapOptions = {
            center: location,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var mapEl = document.getElementById('mapa');
        var map = new google.maps.Map(mapEl, mapOptions);
        // use GPS to get center position
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.g_lat_home = _this.login.getMylat_home();
            _this.g_lng_home = _this.login.getMylng_home();
            _this.g_latitud = position.coords.latitude;
            _this.g_longitud = position.coords.longitude;
            _this.login.setMylat(_this.g_latitud);
            _this.login.setMylng(_this.g_longitud);
            _this.direccion_entrega.la_direccion();
            _this.lat_lng = newLatLng;
            console.log(_this.lat_lng);
            _this.map.setCenter(newLatLng);
            _this.Position_Marker();
        });
        this.pr_direccion_entrega.set_variable_mapa(this.map);
        return map;
    };
    MapComponent.prototype.Position_Marker = function () {
        var icono = "assets/img/cliente.png";
        var marker = new google.maps.Marker({
            map: this.map,
            /* animation: google.maps.Animation.DROP,*/
            position: this.lat_lng,
            draggable: true,
            icon: icono
        });
        var content = "<h4>Usted está aqui</h4>";
        this.Position_lat_lng(marker, content);
    };
    MapComponent.prototype.Position_lat_lng = function (marker, content) {
        var _this = this;
        /*let infoWindow = new google.maps.InfoWindow({
          content: content
        }); */
        google.maps.event.addListener(marker, 'dragend', function () {
            _this.g_latitud = marker.getPosition().lat();
            _this.g_longitud = marker.getPosition().lng();
            _this.login.setMylat(_this.g_latitud);
            _this.login.setMylng(_this.g_longitud);
            console.log(_this.g_latitud);
            console.log(_this.g_longitud);
            _this.direccion_entrega.la_direccion();
            /*infoWindow.open(this.map, marker);*/
        });
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\components\map\map.html"*/'<div id="mapa"></div>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\components\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_3__pages_direccion_entrega_direccion_entrega__["a" /* DireccionEntregaPage */], __WEBPACK_IMPORTED_MODULE_4__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */]])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=3.js.map