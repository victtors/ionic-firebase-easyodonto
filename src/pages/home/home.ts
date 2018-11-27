import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { EditarPage } from '../editar/editar';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PacientesPage } from '../pacientes/pacientes';

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

    login() {
      this.navCtrl.setRoot(PacientesPage);
    }

}
