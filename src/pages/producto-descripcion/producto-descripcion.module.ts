import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoDescripcionPage } from './producto-descripcion';

@NgModule({
  declarations: [
    ProductoDescripcionPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoDescripcionPage),
  ],
})
export class ProductoDescripcionPageModule {}
