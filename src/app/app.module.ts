import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { PrrutasProvider } from '../providers/prrutas/prrutas';
import { PrloginProvider } from '../providers/prlogin/prlogin';
import { PrregistroProvider } from '../providers/prregistro/prregistro';
import { PrdireccionEntregaProvider } from '../providers/prdireccion-entrega/prdireccion-entrega';
import {SrvalerttoastService} from '../services/srv-alert-toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrrubroProvider } from '../providers/prrubro/prrubro';
import { PrrecargoProvider } from '../providers/prrecargo/prrecargo';
import { PrproductoEstablecimientoProvider } from '../providers/prproducto-establecimiento/prproducto-establecimiento';
import { PrestablecimientoProvider } from '../providers/prestablecimiento/prestablecimiento';
import { PrcategoriaProvider } from '../providers/prcategoria/prcategoria';
import { PrpedidoProvider } from '../providers/prpedido/prpedido';
import { PrhoraEntregaProvider } from '../providers/prhora-entrega/prhora-entrega';
import { PrpushEstablecimientoProvider } from '../providers/prpush-establecimiento/prpush-establecimiento';
import { PrpagoTarjetaProvider } from '../providers/prpago-tarjeta/prpago-tarjeta';
import { PrAlertToastProvider } from '../providers/pr-alert-toast/pr-alert-toast';
import { HttpModule} from '@angular/http';
import { PrMensajeProvider } from '../providers/pr-mensaje/pr-mensaje';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    OneSignal,
    Device,
    NativeGeocoder,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PrrutasProvider,
    PrloginProvider,
    PrregistroProvider,
    PrdireccionEntregaProvider,
    SrvalerttoastService,
    PrrubroProvider,
    PrrecargoProvider,
    PrproductoEstablecimientoProvider,
    PrestablecimientoProvider,
    PrcategoriaProvider,
    PrpedidoProvider,
    PrhoraEntregaProvider,
    PrpushEstablecimientoProvider,
    PrpagoTarjetaProvider,
    PrAlertToastProvider,
    PrMensajeProvider,
  ]
})
export class AppModule { }
