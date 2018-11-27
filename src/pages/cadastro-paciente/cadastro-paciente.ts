import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PacientesPage } from '../pacientes/pacientes';

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
    'email':'',
    'contato':''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPacientePage');
  }

  save(paciente){
    this.dbService.save(paciente).then(d => {
      //Comando para exibir a mensagem
      this.toastrService.show('Paciente cadastrado com sucesso!', 3000)
                        .present();
                        
      this.navCtrl.setRoot(PacientesPage);
    });
  }

}
