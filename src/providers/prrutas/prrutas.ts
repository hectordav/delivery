import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PrrutasProvider {
	principal_url:string='http://mimandadero.com/delivery_rest/';
	principal_url_web:string='http://mimandadero.com/delivery_web/assets/img/';
  constructor(public http: HttpClient) {
    console.log('Hello PrrutasProvider Provider');
    console.log(this.principal_url);
  }
  get_ruta() {
    return this.principal_url;
  }
  get_ruta_web() {
    return this.principal_url_web;
  }

}
