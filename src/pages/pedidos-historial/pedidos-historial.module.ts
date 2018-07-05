import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosHistorialPage } from './pedidos-historial';

@NgModule({
  declarations: [
    PedidosHistorialPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosHistorialPage),
  ],
})
export class PedidosHistorialPageModule {}
