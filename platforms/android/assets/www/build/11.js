webpackJsonp([11],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDescripcionPageModule", function() { return ProductoDescripcionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_descripcion__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoDescripcionPageModule = (function () {
    function ProductoDescripcionPageModule() {
    }
    ProductoDescripcionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_descripcion__["a" /* ProductoDescripcionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_descripcion__["a" /* ProductoDescripcionPage */]),
            ],
        })
    ], ProductoDescripcionPageModule);
    return ProductoDescripcionPageModule;
}());

//# sourceMappingURL=producto-descripcion.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDescripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prrutas_prrutas__ = __webpack_require__(13);
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





var ProductoDescripcionPage = (function () {
    function ProductoDescripcionPage(navCtrl, navParams, pr_producto, ruta, pr_pedido, modalctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_producto = pr_producto;
        this.ruta = ruta;
        this.pr_pedido = pr_pedido;
        this.modalctrl = modalctrl;
        this.result_producto = {
            id_producto: '',
            nombre: '',
            descripcion: '',
            precio: '',
            extra: '',
            imagen: ''
        };
        this.det_pedido = [];
        this.ruta_imagen = this.ruta.get_ruta_web();
    }
    ProductoDescripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoDescripcionPage');
        this.get_producto();
        this.get_pedido();
    };
    ProductoDescripcionPage.prototype.get_producto = function () {
        var _result_producto = this.pr_producto.get_result_producto_id_producto();
        console.log(_result_producto);
        this.result_tamano = this.pr_producto.get_result_tamano_id_producto();
        this.result_producto.id_producto = _result_producto.id_producto;
        this.result_producto.nombre = _result_producto.nombre_producto;
        this.result_producto.descripcion = _result_producto.descripcion_producto;
        this.result_producto.precio = _result_producto.precio;
        this.result_producto.extra = _result_producto.extra;
        this.result_producto.imagen = _result_producto.imagen;
    };
    ProductoDescripcionPage.prototype.get_pedido = function () {
        this.det_pedido = this.pr_pedido.get_variable_pedido();
    };
    ProductoDescripcionPage.prototype.agregar_det_pedido = function (item) {
        var det_pedido = this.det_pedido;
        console.log(item);
        console.log(det_pedido);
        var j = 0;
        var _cantidad;
        if (det_pedido == []) {
        }
        else {
            /**/
            /*el item del producto*/
            var _id_producto_item = item.id_producto;
            /**/
            var _id_det_pedido = this.det_pedido;
            var i = 0;
            for (var _i = 0, _id_det_pedido_1 = _id_det_pedido; _i < _id_det_pedido_1.length; _i++) {
                var value = _id_det_pedido_1[_i];
                var _id_producto = value.id_producto;
                _cantidad = value.cantidad;
                if (_id_producto == _id_producto_item) {
                    this.det_pedido.splice(i, 1);
                    console.log('lo resta');
                    j = 1;
                }
                i++;
            }
            /*lo suma*/
        }
        if (j == 0) {
            this.det_pedido.push({
                /*si no existe el producto del for lo suma*/
                id_producto: item.id_producto,
                nombre: item.nombre,
                cantidad: 1,
                total: item.precio
            });
        }
        else {
            _cantidad = _cantidad + 1;
            /*si existe en el for lo resta y luego lo suma con cantidad 2*/
            this.det_pedido.push({
                id_producto: item.id_producto,
                nombre: item.nombre,
                cantidad: _cantidad,
                total: item.precio * _cantidad
            });
        }
        /**/
        this.pr_pedido.set_variable_pedido(this.det_pedido);
        this.det_pedido = this.pr_pedido.get_variable_pedido();
        console.log(this.det_pedido);
        this.sumar_total();
    };
    ProductoDescripcionPage.prototype.sumar_total = function () {
        var _this = this;
        var _det_pedido = this.det_pedido;
        var _cantidad_productos = 0;
        var _total_productos = 0;
        for (var _i = 0, _det_pedido_1 = _det_pedido; _i < _det_pedido_1.length; _i++) {
            var value = _det_pedido_1[_i];
            _cantidad_productos = _cantidad_productos + value.cantidad;
            _total_productos = _total_productos + parseInt(value.total);
        }
        this.pr_pedido.set_variable_items(_cantidad_productos);
        this.pr_pedido.set_variable_total(_total_productos);
        var extra = this.result_producto.extra;
        console.log(extra);
        if (extra == 0 || extra == null) {
            this.navCtrl.pop();
        }
        else {
            this.pr_producto.set_variable_id_producto(this.result_producto.id_producto);
            var modal = this.modalctrl.create('ProductoExtraPage');
            modal.onDidDismiss(function (data) {
                _this.navCtrl.pop();
            });
            modal.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], ProductoDescripcionPage.prototype, "navBar", void 0);
    ProductoDescripcionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-descripcion',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-descripcion\producto-descripcion.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>{{result_producto.nombre}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n			<div align="center">\n					<img src="{{this.ruta_imagen}}{{result_producto.imagen}}"/>  \n			</div>\n		   	 <div align="center">\n		      	{{result_producto.nombre}}\n		   	 </div>\n		    <ion-grid>\n		    	<ion-row>\n		    		<ion-col col-8>\n		    			<p>{{result_producto.descripcion}}</p>\n		    		</ion-col>\n		    		<ion-col col-3>\n		    			<p>MNX {{result_producto.precio}}</p>\n		    		</ion-col>\n		    	</ion-row>\n		    </ion-grid>\n</ion-content>\n<ion-footer>\n   <div align="center">\n		<button ion-button color="boton_aceptar" full large icon-left (click)="agregar_det_pedido(result_producto)">\n			<ion-icon name="cart"></ion-icon>\n				Agregar\n			</button>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-descripcion\producto-descripcion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__["a" /* PrproductoEstablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ProductoDescripcionPage);
    return ProductoDescripcionPage;
}());

//# sourceMappingURL=producto-descripcion.js.map

/***/ })

});
//# sourceMappingURL=11.js.map