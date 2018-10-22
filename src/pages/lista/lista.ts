import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  canciones = ["De Una Vez		2:11",
    "Mejor Me Alejo		3:21",
    "La Sacamos del Estadio		3:25",
    "Por Siempre Mi Amor		3:20",
    "Por Mí No Te Detengas		3:45",
    "El Cocodrilo		3:24",
    "Se Podría Decir		3:24",
    "Parte de Mi Porte		2:29",
    "No Elegí Conocerte		4:14",
    "Prefiero Perderte		3:26",
    "No Te Imaginas		3:03",
    "Las Calles de Mi Rancho		2:08",
    "Si Cruzas la Puerta		3:49",
    "Verme Brillar		2:50",
    "Hace Un Mes		3:15",
    "Cómo Dejo de Quererte		3:58"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
