import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { EditarPage } from '../editar/editar';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { storage } from 'firebase';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private pacientes;

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider,
    ) {

      this.pacientes = this.dbService.getAll();
    }
    

  add(){
    this.navCtrl.push(CadastroPacientePage);
  }

  goToSingle(paciente){
    this.navCtrl.push(EditarPage, {
      'paciente': paciente
    });
  }

}
