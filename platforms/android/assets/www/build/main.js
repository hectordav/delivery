webpackJsonp([27],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrloginProvider = (function () {
    function PrloginProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
        console.log(this.principal_url);
    }
    PrloginProvider.prototype.setMylat = function (value) {
        this.lat = value;
    };
    PrloginProvider.prototype.getMylat = function () {
        return this.lat;
    };
    PrloginProvider.prototype.setMylng = function (value) {
        this.lng = value;
    };
    /*obtengo la variable global para enviarla a los controlers*/
    PrloginProvider.prototype.getMylng = function () {
        return this.lng;
    };
    PrloginProvider.prototype.set_new_lat_lng_home = function (value) {
        this.new_lat_lng_home = value;
    };
    PrloginProvider.prototype.get_new_lat_lng_home = function () {
        return this.new_lat_lng_home;
    };
    PrloginProvider.prototype.setMylat_home = function (value) {
        this.lat_home = value;
    };
    PrloginProvider.prototype.getMylat_home = function () {
        return this.lat_home;
    };
    PrloginProvider.prototype.setMylng_home = function (value) {
        this.lng_home = value;
    };
    /*obtengo la variable global para enviarla a los controlers*/
    PrloginProvider.prototype.getMylng_home = function () {
        return this.lng_home;
    };
    /*el serial*/
    PrloginProvider.prototype.set_serial = function (value) {
        this.variable_serial = value;
    };
    /*obtengo el serial*/
    PrloginProvider.prototype.get_serial = function () {
        return this.variable_serial;
    };
    PrloginProvider.prototype.set_inicio_sesion = function (value) {
        this.variable_inicio_sesion = value;
    };
    PrloginProvider.prototype.get_inicio_sesion = function () {
        return this.variable_inicio_sesion;
    };
    PrloginProvider.prototype.set_id_usuario = function (value) {
        this.variable_id_usuario = value;
    };
    PrloginProvider.prototype.get_id_usuario = function () {
        return this.variable_id_usuario;
    };
    /*el token del push*/
    PrloginProvider.prototype.setToken = function (value) {
        this.variable_token = value;
    };
    /*obtengo el push y lo comparo con el guardado */
    PrloginProvider.prototype.getToken = function () {
        return this.variable_token;
    };
    PrloginProvider.prototype.login_manual = function (login, clave, token, serial) {
        var variable_2 = JSON.stringify({ login: login, clave: clave, token: token, serial: serial });
        var url = this.principal_url + 'login/login_manual';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrloginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrloginProvider);
    return PrloginProvider;
}());

//# sourceMappingURL=prlogin.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrrutasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrrutasProvider = (function () {
    function PrrutasProvider(http) {
        this.http = http;
        this.principal_url = 'http://mimandadero.com/delivery_rest/';
        this.principal_url_web = 'http://mimandadero.com/delivery_web/assets/img/';
        console.log('Hello PrrutasProvider Provider');
        console.log(this.principal_url);
    }
    PrrutasProvider.prototype.get_ruta = function () {
        return this.principal_url;
    };
    PrrutasProvider.prototype.get_ruta_web = function () {
        return this.principal_url_web;
    };
    PrrutasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrrutasProvider);
    return PrrutasProvider;
}());

//# sourceMappingURL=prrutas.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autocomplete/autocomplete.module": [
		327,
		26
	],
	"../pages/calificar-pedido/calificar-pedido.module": [
		328,
		25
	],
	"../pages/cards/cards.module": [
		329,
		24
	],
	"../pages/content/content.module": [
		330,
		23
	],
	"../pages/direccion-entrega-registradas/direccion-entrega-registradas.module": [
		331,
		22
	],
	"../pages/direccion-entrega/direccion-entrega.module": [
		332,
		3
	],
	"../pages/establecimiento-seleccionado/establecimiento-seleccionado.module": [
		333,
		21
	],
	"../pages/establecimiento/establecimiento.module": [
		334,
		0
	],
	"../pages/home/home.module": [
		335,
		20
	],
	"../pages/item-create/item-create.module": [
		336,
		19
	],
	"../pages/item-detail/item-detail.module": [
		337,
		18
	],
	"../pages/list-master/list-master.module": [
		338,
		17
	],
	"../pages/login/login.module": [
		339,
		16
	],
	"../pages/menu/menu.module": [
		340,
		15
	],
	"../pages/pago-payu/pago-payu.module": [
		341,
		1
	],
	"../pages/pedido-procesado/pedido-procesado.module": [
		342,
		14
	],
	"../pages/pedido-ver/pedido-ver.module": [
		343,
		13
	],
	"../pages/pedidos-historial/pedidos-historial.module": [
		344,
		12
	],
	"../pages/producto-descripcion/producto-descripcion.module": [
		345,
		11
	],
	"../pages/producto-extra/producto-extra.module": [
		346,
		10
	],
	"../pages/producto-seleccionado/producto-seleccionado.module": [
		347,
		9
	],
	"../pages/prueba/prueba.module": [
		348,
		8
	],
	"../pages/search/search.module": [
		349,
		7
	],
	"../pages/signup/signup.module": [
		350,
		6
	],
	"../pages/tabs/tabs.module": [
		351,
		2
	],
	"../pages/tutorial/tutorial.module": [
		352,
		5
	],
	"../pages/welcome/welcome.module": [
		353,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpedidoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrpedidoProvider = (function () {
    function PrpedidoProvider(http, http_2, ruta) {
        this.http = http;
        this.http_2 = http_2;
        this.ruta = ruta;
        this.variable_det_pedido = [];
        this.variable_extra_det_pedido = [];
        this.variable_items = 0;
        this.variable_total = 0;
        this.principal_url = this.ruta.get_ruta();
    }
    PrpedidoProvider.prototype.set_result_pedido = function (value) {
        this.result_pedido = value;
    };
    PrpedidoProvider.prototype.get_result_pedido = function () {
        return this.result_pedido;
    };
    PrpedidoProvider.prototype.set_result_det_pedido = function (value) {
        this.result_det_pedido = value;
    };
    PrpedidoProvider.prototype.get_result_det_pedido = function () {
        return this.result_det_pedido;
    };
    PrpedidoProvider.prototype.set_result_extra_pedido = function (value) {
        this.result_extra_pedido = value;
    };
    PrpedidoProvider.prototype.get_result_extra_pedido = function () {
        return this.result_extra_pedido;
    };
    PrpedidoProvider.prototype.set_variable_extra_pedido = function (value) {
        this.variable_extra_pedido = value;
    };
    PrpedidoProvider.prototype.get_variable_extra_pedido = function () {
        return this.variable_extra_pedido;
    };
    PrpedidoProvider.prototype.set_varibale_token_repartidor = function (value) {
        this.varibale_token_repartidor = value;
    };
    PrpedidoProvider.prototype.get_varibale_token_repartidor = function () {
        return this.varibale_token_repartidor;
    };
    PrpedidoProvider.prototype.set_variable_status_pedido = function (value) {
        this.variable_status_pedido = value;
    };
    PrpedidoProvider.prototype.get_variable_status_pedido = function () {
        return this.variable_status_pedido;
    };
    PrpedidoProvider.prototype.set_total = function (value) {
        this.total = value;
    };
    PrpedidoProvider.prototype.get_total = function () {
        return this.total;
    };
    PrpedidoProvider.prototype.set_id_metodo_pago = function (value) {
        this.id_metodo_pago = value;
    };
    PrpedidoProvider.prototype.get_id_metodo_pago = function () {
        return this.id_metodo_pago;
    };
    PrpedidoProvider.prototype.set_id_hora_entrega = function (value) {
        this.id_hora_entrega = value;
    };
    PrpedidoProvider.prototype.get_id_hora_entrega = function () {
        return this.id_hora_entrega;
    };
    PrpedidoProvider.prototype.set_pedido_procesado = function (value) {
        this.pedido_procesado = value;
    };
    PrpedidoProvider.prototype.get_pedido_procesado = function () {
        return this.pedido_procesado;
    };
    PrpedidoProvider.prototype.set_id_pedido = function (value) {
        this.id_pedido = value;
    };
    PrpedidoProvider.prototype.get_id_pedido = function () {
        return this.id_pedido;
    };
    PrpedidoProvider.prototype.set_det_pedido_procesado = function (value) {
        this.det_pedido_procesado = value;
    };
    PrpedidoProvider.prototype.get_det_pedido_procesado = function () {
        return this.det_pedido_procesado;
    };
    PrpedidoProvider.prototype.set_variable_pedido = function (value) {
        this.variable_det_pedido = value;
    };
    PrpedidoProvider.prototype.get_variable_pedido = function () {
        return this.variable_det_pedido;
    };
    PrpedidoProvider.prototype.set_variable_extra_det_pedido = function (value) {
        this.variable_extra_det_pedido = value;
    };
    PrpedidoProvider.prototype.get_variable_extra_det_pedido = function () {
        return this.variable_extra_det_pedido;
    };
    PrpedidoProvider.prototype.set_variable_items = function (value) {
        this.variable_items = value;
    };
    PrpedidoProvider.prototype.get_variable_items = function () {
        return this.variable_items;
    };
    PrpedidoProvider.prototype.set_variable_total = function (value) {
        this.variable_total = value;
    };
    PrpedidoProvider.prototype.get_variable_total = function () {
        return this.variable_total;
    };
    PrpedidoProvider.prototype.set_token_repartidor_pedido_seleccionado = function (value) {
        this.token_repartidor_pedido_seleccionado = value;
    };
    PrpedidoProvider.prototype.get_token_repartidor_pedido_seleccionado = function () {
        return this.token_repartidor_pedido_seleccionado;
    };
    PrpedidoProvider.prototype.set_token_empresa_pedido_seleccionado = function (value) {
        this.token_empresa_pedido_seleccionado = value;
    };
    PrpedidoProvider.prototype.get_token_empresa_pedido_seleccionado = function () {
        return this.token_empresa_pedido_seleccionado;
    };
    PrpedidoProvider.prototype.set_variable_token_empresa = function (value) {
        this.variable_token_empresa = value;
    };
    PrpedidoProvider.prototype.get_variable_token_empresa = function () {
        return this.variable_token_empresa;
    };
    PrpedidoProvider.prototype.procesar_pedido = function (_id_establecimiento, _id_usuario, _id_direccion_entrega, _id_recargo, _total_item, _total_pedido) {
        var variable_2 = JSON.stringify({ id_establecimiento: _id_establecimiento, id_usuario: _id_usuario, id_direccion_entrega: _id_direccion_entrega, id_recargo: _id_recargo, total_item: _total_item, total_pedido: _total_pedido });
        var url = this.principal_url + 'pedido/procesar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.guardar_det_pedido = function (id_pedido, id_producto, descripcion, cantidad, total) {
        var variable_2 = JSON.stringify({ id_pedido: id_pedido, id_producto: id_producto, descripcion: descripcion, cantidad: cantidad, total: total });
        var url = this.principal_url + 'pedido/guardar_det_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.get_det_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_det_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.get_pedido_id_usuario = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'pedido/get_pedido_id_usuario';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidoProvider.prototype.guardar_extra_det_pedido = function (_id_pedido, _id_det_pedido, _id_extra) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido, id_det_pedido: _id_det_pedido, id_extra: _id_extra });
        var url = this.principal_url + 'pedido/guardar_extra_det_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.get_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.eliminar_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/eliminar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.actualizar_pedido = function (_id_pedido, _id_hora_entrega, _id_metodo_pago) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido, id_hora_entrega: _id_hora_entrega, id_metodo_pago: _id_metodo_pago });
        var url = this.principal_url + 'pedido/actualizar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.contar_pedido = function (_id_usuario) {
        var variable_2 = JSON.stringify({ id_usuario: _id_usuario });
        var url = this.principal_url + 'pedido/contar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidoProvider.prototype.get_extra_det_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_extra_det_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidoProvider.prototype.get_token_usuario_repartidor_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_token_usuario_repartidor_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidoProvider.prototype.get_token_usuario_empresa_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_token_usuario_empresa_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidoProvider.prototype.guardar_calificacion = function (datos) {
        var variable_2 = JSON.stringify(datos);
        var url = this.principal_url + 'pedido/guardar_calificacion';
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrpedidoProvider);
    return PrpedidoProvider;
}());

//# sourceMappingURL=prpedido.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrdireccionEntregaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrdireccionEntregaProvider = (function () {
    function PrdireccionEntregaProvider(http, ruta, http_2) {
        this.http = http;
        this.ruta = ruta;
        this.http_2 = http_2;
        console.log('Hello PrtiempoEntregaProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    PrdireccionEntregaProvider.prototype.set_variable_mapa = function (value) {
        this.variable_mapa = value;
    };
    PrdireccionEntregaProvider.prototype.get_variable_mapa = function () {
        return this.variable_mapa;
    };
    PrdireccionEntregaProvider.prototype.set_variable_result_direccion_entrega_todas = function (value) {
        this.variable_result_direccion_entrega_todas = value;
    };
    PrdireccionEntregaProvider.prototype.get_variable_result_direccion_entrega_todas = function () {
        return this.variable_result_direccion_entrega_todas;
    };
    PrdireccionEntregaProvider.prototype.set_variable_direccion_entrega = function (value) {
        this.variable_result = value;
    };
    PrdireccionEntregaProvider.prototype.get_variable_direccion_entrega_activa = function () {
        return this.variable_result;
    };
    PrdireccionEntregaProvider.prototype.set_variable_id_direccion_entrega = function (value) {
        this.variable_id_direccion_entrega = value;
    };
    PrdireccionEntregaProvider.prototype.get_variable_id_direccion_entrega_activa = function () {
        return this.variable_id_direccion_entrega;
    };
    PrdireccionEntregaProvider.prototype.get_direccion_entrega = function (id_usuario) {
        var variable_2 = JSON.stringify({ id_usuario: id_usuario });
        var url = this.principal_url + 'direccion_entrega/get_direccion_entrega';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrdireccionEntregaProvider.prototype.get_direccion_entrega_activo = function (id_usuario) {
        var variable_2 = JSON.stringify({ id_usuario: id_usuario });
        var url = this.principal_url + 'direccion_entrega/get_direccion_entrega_activo';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrdireccionEntregaProvider.prototype.guardar_direccion_entrega = function (id_usuario, lat_lng, direccion, det_direccion) {
        var variable_2 = JSON.stringify({ id_usuario: id_usuario, lat_lng: lat_lng, direccion: direccion, det_direccion: det_direccion });
        var url = this.principal_url + 'direccion_entrega/guardar_direccion_entrega';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrdireccionEntregaProvider.prototype.activar_direccion_entrega = function (_id_usuario, _id_direccion_entrega) {
        var variable_2 = JSON.stringify({ id_usuario: _id_usuario, id_direccion_entrega: _id_direccion_entrega });
        var url = this.principal_url + 'direccion_entrega/activar_direccion_entrega';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrdireccionEntregaProvider.prototype.eliminar_direccion_entrega = function (_id_direccion_entrega) {
        var variable_2 = JSON.stringify({ id_direccion_entrega: _id_direccion_entrega });
        var url = this.principal_url + 'direccion_entrega/eliminar_direccion_entrega';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrdireccionEntregaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PrdireccionEntregaProvider);
    return PrdireccionEntregaProvider;
}());

//# sourceMappingURL=prdireccion-entrega.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvalerttoastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SrvalerttoastService = (function () {
    function SrvalerttoastService(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SrvalerttoastService.prototype.set_variable_alert_confirmar = function (value) {
        this.variable_alert_confirmar = value;
    };
    SrvalerttoastService.prototype.get_variable_alert_confirmar = function () {
        return this.variable_alert_confirmar;
    };
    SrvalerttoastService.prototype.show_alert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    SrvalerttoastService.prototype.confirmar_accion = function (titulo, mensaje) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            message: mensaje,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.set_variable_alert_confirmar(0);
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        _this.set_variable_alert_confirmar(1);
                    }
                }
            ]
        });
        alert.present();
    };
    SrvalerttoastService.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SrvalerttoastService.prototype.show_loading = function (item) {
        this.loader = this.loadingCtrl.create({
            content: item
        });
        this.loader.present();
    };
    SrvalerttoastService.prototype.dismis_loading = function () {
        this.loader.dismiss();
    };
    SrvalerttoastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SrvalerttoastService);
    return SrvalerttoastService;
}());

//# sourceMappingURL=srv-alert-toast.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrAlertToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrAlertToastProvider = (function () {
    function PrAlertToastProvider(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello PrAlertToastProvider Provider');
    }
    PrAlertToastProvider.prototype.show_alert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    PrAlertToastProvider.prototype.mensaje_toast_medio = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    PrAlertToastProvider.prototype.mensaje_toast_pie = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    PrAlertToastProvider.prototype.show_loading = function (item) {
        this.loader = this.loadingCtrl.create({
            content: item
        });
        this.loader.present();
    };
    PrAlertToastProvider.prototype.dismis_loading = function () {
        this.loader.dismiss();
    };
    PrAlertToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PrAlertToastProvider);
    return PrAlertToastProvider;
}());

//# sourceMappingURL=pr-alert-toast.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrproductoEstablecimientoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrproductoEstablecimientoProvider = (function () {
    function PrproductoEstablecimientoProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrproductoEstablecimientoProvider.prototype.set_result_tamano_id_producto = function (value) {
        this.result_tamano_id_producto = value;
    };
    PrproductoEstablecimientoProvider.prototype.get_result_tamano_id_producto = function () {
        return this.result_tamano_id_producto;
    };
    PrproductoEstablecimientoProvider.prototype.set_variable_id_producto = function (value) {
        this.variable_id_producto = value;
    };
    PrproductoEstablecimientoProvider.prototype.get_variable_id_producto = function () {
        return this.variable_id_producto;
    };
    PrproductoEstablecimientoProvider.prototype.set_result_extra_id_producto = function (value) {
        this.result_extra_id_producto = value;
    };
    PrproductoEstablecimientoProvider.prototype.get_result_extra_id_producto = function () {
        return this.result_extra_id_producto;
    };
    PrproductoEstablecimientoProvider.prototype.set_result_producto_id_producto = function (value) {
        this.result_producto_id_producto = value;
    };
    PrproductoEstablecimientoProvider.prototype.get_result_producto_id_producto = function () {
        return this.result_producto_id_producto;
    };
    PrproductoEstablecimientoProvider.prototype.set_result_producto_establecimiento = function (value) {
        this.result_producto_establecimiento = value;
    };
    PrproductoEstablecimientoProvider.prototype.get_result_producto_establecimiento = function () {
        return this.result_producto_establecimiento;
    };
    PrproductoEstablecimientoProvider.prototype.get_producto_id_establecimiento = function (id_establecimiento) {
        var variable_2 = JSON.stringify({ id_establecimiento: id_establecimiento });
        var url = this.principal_url + 'producto_establecimiento/get_producto_id_establecimiento';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrproductoEstablecimientoProvider.prototype.get_tamano_producto = function (id_producto) {
        var variable_2 = JSON.stringify({ id_producto: id_producto });
        var url = this.principal_url + 'producto_establecimiento/get_tamano_producto';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrproductoEstablecimientoProvider.prototype.get_extra_id_producto = function (id_producto) {
        var variable_2 = JSON.stringify({ id_producto: id_producto });
        var url = this.principal_url + 'extra/get_extra_id_producto';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrproductoEstablecimientoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrproductoEstablecimientoProvider);
    return PrproductoEstablecimientoProvider;
}());

//# sourceMappingURL=prproducto-establecimiento.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestablecimientoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrestablecimientoProvider = (function () {
    function PrestablecimientoProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrestablecimientoProvider.prototype.set_comision_establecimiento = function (value) {
        this.comision_establecimiento = value;
    };
    PrestablecimientoProvider.prototype.get_comision_establecimiento = function () {
        return this.comision_establecimiento;
    };
    PrestablecimientoProvider.prototype.set_result_id_establecimiento = function (value) {
        this.result_id_establecimiento = value;
    };
    PrestablecimientoProvider.prototype.get_result_id_establecimiento = function () {
        return this.result_id_establecimiento;
    };
    PrestablecimientoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrestablecimientoProvider);
    return PrestablecimientoProvider;
}());

//# sourceMappingURL=prestablecimiento.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrhoraEntregaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrhoraEntregaProvider = (function () {
    function PrhoraEntregaProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrhoraEntregaProvider.prototype.set_variable_result_hora_entrega = function (value) {
        this.variable_result_hora_entrega = value;
    };
    PrhoraEntregaProvider.prototype.get_variable_result_hora_entrega = function () {
        return this.variable_result_hora_entrega;
    };
    PrhoraEntregaProvider.prototype.get_hora_entrega = function () {
        var variable_2 = JSON.stringify({ id_cliente: 1 });
        var url = this.principal_url + 'hora_entrega/get_hora_entrega';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrhoraEntregaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrhoraEntregaProvider);
    return PrhoraEntregaProvider;
}());

//# sourceMappingURL=prhora-entrega.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrrubroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrrubroProvider = (function () {
    function PrrubroProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
        console.log('rubro provider');
    }
    PrrubroProvider.prototype.set_rubro_establecimiento = function (value) {
        this.variable_rubro_establecimiento = value;
    };
    PrrubroProvider.prototype.get_rubro_establecimiento = function () {
        return this.variable_rubro_establecimiento;
    };
    PrrubroProvider.prototype.get_rubro = function () {
        var variable_2 = JSON.stringify({ id_cliente: 1 });
        var url = this.principal_url + 'rubro/get_rubro';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrrubroProvider.prototype.get_establecimientos_id_rubro = function (id_rubro) {
        var variable_2 = JSON.stringify({ id_rubro: id_rubro });
        var url = this.principal_url + 'rubro/get_establecimientos_id_rubro';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrrubroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrrubroProvider);
    return PrrubroProvider;
}());

//# sourceMappingURL=prrubro.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrrecargoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrrecargoProvider = (function () {
    function PrrecargoProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
        console.log('Hello PrrecargoProvider Provider');
    }
    PrrecargoProvider.prototype.set_result_recargo = function (value) {
        this.variable_recargo = value;
    };
    PrrecargoProvider.prototype.get_result_recargo = function () {
        return this.variable_recargo;
    };
    PrrecargoProvider.prototype.set_comision_asignada = function (value) {
        this.variable_comision_asignada = value;
    };
    PrrecargoProvider.prototype.get_comision_asignada = function () {
        return this.variable_comision_asignada;
    };
    PrrecargoProvider.prototype.get_recargo = function () {
        var variable_2 = JSON.stringify({ id_cliente: 1 });
        var url = this.principal_url + 'recargo/get_recargo';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrrecargoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrrecargoProvider);
    return PrrecargoProvider;
}());

//# sourceMappingURL=prrecargo.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpagoTarjetaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrpagoTarjetaProvider = (function () {
    function PrpagoTarjetaProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrpagoTarjetaProvider.prototype.get_pago_tarjeta = function () {
        var variable_2 = JSON.stringify({ id_cliente: 1 });
        var url = this.principal_url + 'pago_tarjeta/get_pago_tarjeta';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpagoTarjetaProvider.prototype.enviar_pago_tarjeta = function (envio_datos) {
        var variable_2 = JSON.stringify({ envio_datos: envio_datos });
        var url = this.principal_url + 'Pago_tarjeta/enviar_pago_tarjeta';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpagoTarjetaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrpagoTarjetaProvider);
    return PrpagoTarjetaProvider;
}());

//# sourceMappingURL=prpago-tarjeta.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpushEstablecimientoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrpushEstablecimientoProvider = (function () {
    function PrpushEstablecimientoProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrpushEstablecimientoProvider.prototype.push_nuevo_pedido = function (id_establecimiento) {
        var variable_2 = JSON.stringify({ id_establecimiento: id_establecimiento });
        var url = this.principal_url + 'push_establecimiento/push_nuevo_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpushEstablecimientoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrpushEstablecimientoProvider);
    return PrpushEstablecimientoProvider;
}());

//# sourceMappingURL=prpush-establecimiento.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrMensajeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrMensajeProvider = (function () {
    function PrMensajeProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrMensajeProvider.prototype.enviar_mensaje_empresa = function (_token_usuario, _id_pedido, _mensaje) {
        var variable_2 = JSON.stringify({ token: _token_usuario, id_pedido: _id_pedido, mensaje: _mensaje });
        var url = this.principal_url + 'push_establecimiento/enviar_mensaje_establecimiento_cliente';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrMensajeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrMensajeProvider);
    return PrMensajeProvider;
}());

//# sourceMappingURL=pr-mensaje.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrregistroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrregistroProvider = (function () {
    function PrregistroProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        this.principal_url = this.ruta.get_ruta();
    }
    PrregistroProvider.prototype.guardar_usuario = function (curp, nombre, direccion, correo, pass, telf, token, serial, id_nivel) {
        var variable_2 = JSON.stringify({ curp: curp, nombre: nombre, direccion: direccion, correo: correo, pass: pass, telf: telf, token: token, serial: serial, id_nivel: id_nivel });
        var url = this.principal_url + 'registro/guardar_usuario';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrregistroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrregistroProvider);
    return PrregistroProvider;
}());

//# sourceMappingURL=prregistro.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_prrutas_prrutas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prlogin_prlogin__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_prregistro_prregistro__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_prdireccion_entrega_prdireccion_entrega__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_srv_alert_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_prrubro_prrubro__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_prrecargo_prrecargo__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_prproducto_establecimiento_prproducto_establecimiento__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_prestablecimiento_prestablecimiento__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_prcategoria_prcategoria__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_prpedido_prpedido__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_prhora_entrega_prhora_entrega__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_prpush_establecimiento_prpush_establecimiento__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_prpago_tarjeta_prpago_tarjeta__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_pr_alert_toast_pr_alert_toast__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_pr_mensaje_pr_mensaje__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calificar-pedido/calificar-pedido.module#CalificarPedidoPageModule', name: 'CalificarPedidoPage', segment: 'calificar-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/direccion-entrega-registradas/direccion-entrega-registradas.module#DireccionEntregaRegistradasPageModule', name: 'DireccionEntregaRegistradasPage', segment: 'direccion-entrega-registradas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/direccion-entrega/direccion-entrega.module#DireccionEntregaPageModule', name: 'DireccionEntregaPage', segment: 'direccion-entrega', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/establecimiento-seleccionado/establecimiento-seleccionado.module#EstablecimientoSeleccionadoPageModule', name: 'EstablecimientoSeleccionadoPage', segment: 'establecimiento-seleccionado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/establecimiento/establecimiento.module#EstablecimientoPageModule', name: 'EstablecimientoPage', segment: 'establecimiento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago-payu/pago-payu.module#PagoPayuPageModule', name: 'PagoPayuPage', segment: 'pago-payu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-procesado/pedido-procesado.module#PedidoProcesadoPageModule', name: 'PedidoProcesadoPage', segment: 'pedido-procesado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-ver/pedido-ver.module#PedidoVerPageModule', name: 'PedidoVerPage', segment: 'pedido-ver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-historial/pedidos-historial.module#PedidosHistorialPageModule', name: 'PedidosHistorialPage', segment: 'pedidos-historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-descripcion/producto-descripcion.module#ProductoDescripcionPageModule', name: 'ProductoDescripcionPage', segment: 'producto-descripcion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-extra/producto-extra.module#ProductoExtraPageModule', name: 'ProductoExtraPage', segment: 'producto-extra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto-seleccionado/producto-seleccionado.module#ProductoSeleccionadoPageModule', name: 'ProductoSeleccionadoPage', segment: 'producto-seleccionado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prueba/prueba.module#PruebaPageModule', name: 'PruebaPage', segment: 'prueba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_prrutas_prrutas__["a" /* PrrutasProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_prlogin_prlogin__["a" /* PrloginProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_prregistro_prregistro__["a" /* PrregistroProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_prdireccion_entrega_prdireccion_entrega__["a" /* PrdireccionEntregaProvider */],
                __WEBPACK_IMPORTED_MODULE_20__services_srv_alert_toast__["a" /* SrvalerttoastService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_prrubro_prrubro__["a" /* PrrubroProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_prrecargo_prrecargo__["a" /* PrrecargoProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_prproducto_establecimiento_prproducto_establecimiento__["a" /* PrproductoEstablecimientoProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_prestablecimiento_prestablecimiento__["a" /* PrestablecimientoProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_prcategoria_prcategoria__["a" /* PrcategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_prpedido_prpedido__["a" /* PrpedidoProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_prhora_entrega_prhora_entrega__["a" /* PrhoraEntregaProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_prpush_establecimiento_prpush_establecimiento__["a" /* PrpushEstablecimientoProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_prpago_tarjeta_prpago_tarjeta__["a" /* PrpagoTarjetaProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_pr_alert_toast_pr_alert_toast__["a" /* PrAlertToastProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_pr_mensaje_pr_mensaje__["a" /* PrMensajeProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(178);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_prlogin_prlogin__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(translate, platform, config, statusBar, splashScreen, oneSignal, device, alertCtrl, login, loadingCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.login = login;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = (localStorage.getItem('delivery_cliente')) ? 'HomePage' : 'TutorialPage';
        this.pages = [
            { title: 'Home', component: 'HomePage' },
            { title: 'Direcciones', component: 'DireccionEntregaRegistradasPage' },
            { title: 'Historial de pedidos', component: 'PedidosHistorialPage' }
        ];
        this.backPressed = false;
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.notificaciones();
                _this.background();
                platform.registerBackButtonAction(function () {
                    if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                        return;
                    }
                    if (!_this.backPressed) {
                        _this.backPressed = true;
                        _this.presentLoading();
                        setTimeout(function () { return _this.backPressed = false; }, 2000);
                        return;
                    }
                    else {
                        _this.platform.exitApp();
                    }
                });
            }
            else {
                /*no hace nada por esta en la web*/
            }
        });
        this.initTranslate();
    }
    MyApp.prototype.presentLoading = function () {
        var _this = this;
        this.loader = this.alertCtrl.create({
            title: 'Confirmar',
            message: 'Realmente desea Salir',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salir',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.loader.present();
    };
    MyApp.prototype.background = function () {
        /******************en segundo plano********************+*/
        /* esto se debe agregar en la consola raiz del proyecto
       ionic cordova plugin add cordova-plugin-background-mode   */
        console.log("MyApp::constructor platform.ready");
        cordova.plugins.backgroundMode.setDefaults({
            title: 'Delivery Cliente',
            text: 'Esta activo en segundo plano'
            /*icon:'assets/img/logo_2.png'*/
        }, cordova.plugins.backgroundMode.enable());
    };
    MyApp.prototype.notificaciones = function () {
        var _this = this;
        this.serial_device = this.device.uuid;
        this.oneSignal.startInit('0534de58-0352-4d65-bc46-3ee22894b488', '273950506885'); //(appId_onesignal,googleProjectNumber)
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            if (jsonData.notification.payload.body == 'Su pedido fue entregado, quiere calificar su pedido?') {
                var confirm_1 = _this.alertCtrl.create({
                    title: jsonData.notification.payload.title,
                    message: jsonData.notification.payload.body,
                    buttons: [
                        {
                            text: 'En otro momento',
                            handler: function () {
                                console.log('no hace nada');
                            }
                        },
                        {
                            text: 'Calificar',
                            handler: function () {
                                _this.nav.setRoot('PedidosHistorialPage');
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: jsonData.notification.payload.title,
                    subTitle: jsonData.notification.payload.body,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        this.oneSignal.endInit();
        this.presentLoading_carga();
        this.oneSignal.getIds().then(function (id) {
            var el_id = id.userId; /*el id para guardarlo en el token de la base de datos*/
            _this.login.setToken(el_id);
            _this.serial_device = _this.device.uuid; /* el serial del dispositivo*/
            _this.login.set_serial(_this.serial_device + '1');
            _this.loader.dismiss();
        });
    };
    MyApp.prototype.presentLoading_carga = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cerrar_sesion = function () {
        localStorage.removeItem('delivery_cliente');
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar color=\"color_nav_bar\">\n        <ion-title>Menu principal</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n     <ion-footer>\n    <div align=\"center\">\n      <button menuClose ion-item (click)=\"cerrar_sesion()\">\n            Cerrar sesi\u00F3n\n       </button>\n    </div>\n    </ion-footer>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrcategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PrcategoriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrcategoriaProvider = (function () {
    function PrcategoriaProvider(http) {
        this.http = http;
        console.log('Hello PrcategoriaProvider Provider');
    }
    PrcategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrcategoriaProvider);
    return PrcategoriaProvider;
}());

//# sourceMappingURL=prcategoria.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_providers_items__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.js.map