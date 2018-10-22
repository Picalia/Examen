import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disco1Page } from '../disco1/disco1';
import { ImgPage } from '../img/img';
import { ResPage } from '../res/res';
import { BioPage } from '../bio/bio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Disco1 = Disco1Page;
  img = ImgPage;
  res = ResPage;
  bio = BioPage;

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

  


  

  


}
