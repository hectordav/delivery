import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagoPayuPage } from './pago-payu';

@NgModule({
  declarations: [
    PagoPayuPage,
  ],
  imports: [
    IonicPageModule.forChild(PagoPayuPage),
  ],
})
export class PagoPayuPageModule {}
