import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DireccionEntregaPage } from './direccion-entrega';
import {MapComponent} from '../../components/map/map';

@NgModule({
  declarations: [
    DireccionEntregaPage,
    MapComponent
  ],
  imports: [
    IonicPageModule.forChild(DireccionEntregaPage),
  ],
})
export class DireccionEntregaPageModule {}
