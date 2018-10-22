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
import { Img2Page } from '../pages/img2/img2';
import { Bio2Page } from '../pages/bio2/bio2';
import { Res2Page } from '../pages/res2/res2';
import { Lista2Page } from '../pages/lista2/lista2';
import { Bio3Page } from '../pages/bio3/bio3';
import { Res3Page } from '../pages/res3/res3';
import { Img3Page } from '../pages/img3/img3';
import { Lista3Page } from '../pages/lista3/lista3';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    Disco1Page,
    ImgPage,
    BioPage,
    ResPage,
    ListaPage,
    Img2Page,
    Bio2Page,
    Res2Page,
    Lista2Page,
    Bio3Page,
    Res3Page,
    Img3Page,
    Lista3Page
    
    

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
    Img2Page,
    Bio2Page,
    Res2Page,
    Lista2Page,
    Img3Page,
    Res3Page,
    Bio3Page,
    Lista3Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
