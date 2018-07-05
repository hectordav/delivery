import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablecimientoSeleccionadoPage } from './establecimiento-seleccionado';

@NgModule({
  declarations: [
    EstablecimientoSeleccionadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablecimientoSeleccionadoPage),
  ],
})
export class EstablecimientoSeleccionadoPageModule {}
