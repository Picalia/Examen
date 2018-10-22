import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lista2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista2',
  templateUrl: 'lista2.html',
})
export class Lista2Page {

  canciones2 = ["Intro - F.A.M.E.		1:39",
    "Corazón (feat. Nego do Borel)		3:04",
    "El Préstamo		3:39",
    "Cuenta a Saldo		3:17",
    "Hangover (feat. Prince Royce)		4:01",
    "Mi Declaración (feat. Timbaland & Sid)		3:45",
    "How I Like It		2:51",
    "Marinero		3:09",
    "Delincuente		3:26",
    "Condena		3:29",
    "Ojos Que No Ven		3:40",
    "La Ex (feat. Jason Derulo)		3:11",
    "Unfollow		3:21",
    "Felices los 4		3:49",
    "Felices los 4 (feat. Marc Anthony) [Salsa Version]		4:02"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lista2Page');
  }

}
