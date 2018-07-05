webpackJsonp([10],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoExtraPageModule", function() { return ProductoExtraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_extra__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoExtraPageModule = (function () {
    function ProductoExtraPageModule() {
    }
    ProductoExtraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_extra__["a" /* ProductoExtraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__producto_extra__["a" /* ProductoExtraPage */]),
            ],
        })
    ], ProductoExtraPageModule);
    return ProductoExtraPageModule;
}());

//# sourceMappingURL=producto-extra.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoExtraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prpedido_prpedido__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoExtraPage = (function () {
    function ProductoExtraPage(navCtrl, navParams, pr_producto, pr_pedido, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_producto = pr_producto;
        this.pr_pedido = pr_pedido;
        this.viewCtrl = viewCtrl;
        this.item_2 = [];
        this.det_extra = [];
    }
    ProductoExtraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductoExtraPage');
        this.get_extra();
    };
    ProductoExtraPage.prototype.get_extra = function () {
        console.log('entra en extra');
        this.result_extra_producto = this.pr_producto.get_result_extra_id_producto();
        console.log(this.result_extra_producto);
    };
    ProductoExtraPage.prototype.agregar_extra = function () {
        var result_extra = this.pr_producto.get_result_extra_id_producto();
        this.det_extra = this.pr_pedido.get_variable_extra_det_pedido();
        console.log(this.det_extra);
        for (var _i = 0, result_extra_1 = result_extra; _i < result_extra_1.length; _i++) {
            var value = result_extra_1[_i];
            console.log(this.item_2[value.id]);
            /*si el check es true crea el push del array*/
            if (this.item_2[value.id] == true) {
                var id_producto = this.pr_producto.get_variable_id_producto();
                var id_extra = value.id;
                this.det_extra.push({
                    /*si no existe el producto del for lo suma*/
                    id_extra: id_extra,
                    id_producto: id_producto,
                    total: value.precio
                });
            }
            this.pr_pedido.set_variable_extra_det_pedido(this.det_extra);
        }
        this.sumar_total_extra_con_det_pedido();
    };
    ProductoExtraPage.prototype.sumar_total_extra_con_det_pedido = function () {
        var _det_extra = this.det_extra;
        var _total_extra = 0;
        for (var _i = 0, _det_extra_1 = _det_extra; _i < _det_extra_1.length; _i++) {
            var value = _det_extra_1[_i];
            _total_extra = _total_extra + parseInt(value.total);
        }
        /*tomo el total del pedido y le sumo el extra incluido*/
        var total_det_pedido = this.pr_pedido.get_variable_total() + _total_extra;
        this.pr_pedido.set_variable_total(total_det_pedido);
        this.viewCtrl.dismiss();
    };
    ProductoExtraPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    ProductoExtraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto-extra',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-extra\producto-extra.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Extras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<div *ngFor="let item of result_extra_producto">\n			<ion-item>\n    	<ion-label>Extra: {{item.descripcion}}, Precio: {{item.precio}}</ion-label>\n    	<ion-checkbox [(ngModel)]="item_2[item.id]"></ion-checkbox>\n  </ion-item>\n		</div>\n	</ion-list>\n	<div align="center">\n		<button ion-button large icon-left (click)="agregar_extra()">\n			<ion-icon name="cart"></ion-icon>\n				Agregar\n		</button>\n	</div>\n</ion-content>\n<ion-footer>\n   <div align="center">\n		<button ion-button full large color="danger" (click)="cerrar()">\n			Cerrar\n		</button>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_cliente\delivery\src\pages\producto-extra\producto-extra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prproducto_establecimiento_prproducto_establecimiento__["a" /* PrproductoEstablecimientoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prpedido_prpedido__["a" /* PrpedidoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ProductoExtraPage);
    return ProductoExtraPage;
}());

//# sourceMappingURL=producto-extra.js.map

/***/ })

});
//# sourceMappingURL=10.js.map