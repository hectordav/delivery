import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoVerPage } from './pedido-ver';

@NgModule({
  declarations: [
    PedidoVerPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoVerPage),
  ],
})
export class PedidoVerPageModule {}
