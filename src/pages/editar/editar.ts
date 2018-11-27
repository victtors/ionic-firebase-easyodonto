import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PacientesPage } from '../pacientes/pacientes';

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
    'email':'',
    'contato':''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseServiceProvider,
    public toastrService: ToastrServiceProvider
    ) {
    this.paciente = this.navParams.get('paciente');
  }

  //Atualiza os dados do paciente
  update(paciente){
    this.firebaseService.update(paciente).then(d => {
      //Comando para exibir a mensagem
      this.toastrService.show('Alteração feita com sucesso!', 3000)
                        .present();

      this.navCtrl.setRoot(PacientesPage);
    });
  }

  //Deleta os dados do paciente
  remove(paciente){
    this.firebaseService.remove(paciente).then(d => {
      //Comando para exibir a mensagem
      this.toastrService.show('Paciente excluído com sucesso!', 3000)
                        .present();

      this.navCtrl.setRoot(PacientesPage);
    });
  }
}