import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Disco1Page } from '../pages/disco1/disco1';
import { ImgPage } from '../pages/img/img';
import { BioPage } from '../pages/bio/bio';
import { ResPage } from '../pages/res/res';
import { ListaPage } from '../pages/lista/lista';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    Disco1Page,
    ImgPage,
    BioPage,
    ResPage,
    ListaPage
    
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Disco1Page,
    ImgPage,
    BioPage,
    ResPage,
    ListaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
