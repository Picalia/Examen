import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Lista3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista3',
  templateUrl: 'lista3.html',
})
export class Lista3Page {

  canciones3 = ["Quedarme Aquí (En Vivo)	4:22",
  "Quizás, Quizás, Quizás / Amar y Vivir (En Vivo) 		3:11",
  "Gracias a Ti (En Vivo) 		3:44",
  "Que Lo Nuestro Se Quede Nuestro (En Vivo) 	3:38",
  "Día de Lluvia (En Vivo)  [feat. Abel Pintos]		6:01",
  "Si Te Vas (En Vivo) 		3:42",
  "No Llores Más (En Vivo) 		6:02",
  "Tu Juego de Ajedrez (En Vivo) 		1:50",
  "Como Tú (En Vivo) 		3:32",
  "Serás (En Vivo) 	3:43",
  "Voy a Amarte (En Vivo) 		4:09",
  "Otras Vidas (En Vivo) 	3:36",
  "Sólo Tú (En Vivo) 		4:04",
  "Fascinación (En Vivo) 		4:15",
  "¿Cómo Pagarte? (En Vivo) 		3:32",
  "Lo Digo (En Vivo)  [feat. Gente de Zona]		5:26" ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lista3Page');
  }

}
