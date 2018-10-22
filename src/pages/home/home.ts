import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disco1Page } from '../disco1/disco1';
import { ImgPage } from '../img/img';
import { ResPage } from '../res/res';
import { BioPage } from '../bio/bio';
import { ListaPage } from '../lista/lista';
import { Img2Page } from '../img2/img2';
import { Res2Page } from '../res2/res2';
import { Bio2Page } from '../bio2/bio2';
import { Lista2Page } from '../lista2/lista2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Disco1 = Disco1Page;
  img = ImgPage;
  res = ResPage;
  bio = BioPage;
  lista = ListaPage;
  img2 = Img2Page;
  res2 = Res2Page;
  bio2 = Bio2Page;
  lista2 = Lista2Page;


  constructor(public navCtrl: NavController) {

  }

  Clickimg(){
    this.navCtrl.push(this.img)
  }

  Clickres(){
    this.navCtrl.push(this.res)
  }

  Clickbio(){
    this.navCtrl.push(this.bio)
  }

  Clicklista(){
    this.navCtrl.push(this.lista)
  }

  Clickimg2(){
    this.navCtrl.push(this.img2)
  }

  Clickres2(){
    this.navCtrl.push(this.res2)
  }

  Clickbio2(){
    this.navCtrl.push(this.bio2)
  }

  Clicklista2(){
    this.navCtrl.push(this.lista2)
  }

  


  

  


}
