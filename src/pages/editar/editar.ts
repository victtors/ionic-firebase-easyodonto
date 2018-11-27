import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  paciente ={
    'nome' : '',
    'cpf': '',
    'dataNasc':'',
    'nacionalidade':'',
    'email':''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider
    ) {
    this.paciente = this.navParams.get('paciente');
  }

  //Atualiza os dados do paciente
  update(paciente){
    this.firebaseService.update(paciente).then(d => {
      this.navCtrl.setRoot(HomePage);
    });
  }

  //Deleta os dados do paciente
  remove(paciente){
    this.firebaseService.remove(paciente).then(d => {
      this.navCtrl.setRoot(HomePage);
    });
  }
}