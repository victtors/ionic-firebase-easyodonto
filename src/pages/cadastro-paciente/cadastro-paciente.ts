import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the CadastroPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
})
export class CadastroPacientePage {

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
    public dbService: FirebaseServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPacientePage');
  }

  save(paciente){
    this.dbService.save(paciente);
  }

}
