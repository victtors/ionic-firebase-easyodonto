import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pacientes;

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider
    ) {

      this.pacientes = this.dbService.getAll();

  }

  add(){
    this.navCtrl.push(CadastroPacientePage);
  }

}
