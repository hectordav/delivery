import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoProcesadoPage } from './pedido-procesado';

@NgModule({
  declarations: [
    PedidoProcesadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoProcesadoPage),
  ],
})
export class PedidoProcesadoPageModule {}
