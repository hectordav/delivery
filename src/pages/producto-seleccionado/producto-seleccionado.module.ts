import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoSeleccionadoPage } from './producto-seleccionado';

@NgModule({
  declarations: [
    ProductoSeleccionadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoSeleccionadoPage),
  ],
})
export class ProductoSeleccionadoPageModule {}
