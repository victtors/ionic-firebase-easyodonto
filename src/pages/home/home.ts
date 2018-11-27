import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  add(){
    this.navCtrl.push(CadastroPacientePage);
  }

}
