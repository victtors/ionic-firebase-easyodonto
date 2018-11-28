import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { EditarPage } from '../editar/editar';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PacientesPage } from '../pacientes/pacientes';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { ToastrServiceProvider } from '../../providers/toastr-service/toastr-service';

import { User } from '../../providers/auth/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pacientes;
  user: User = new User();

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider,
    private authService: AuthServiceProvider,
    public toastrService: ToastrServiceProvider
    ) {

      this.pacientes = this.dbService.getAll();
    }

    signIn() {
      this.authService.signIn(this.user)
        .then(() => {
          this.navCtrl.setRoot(PacientesPage);
        })
        .catch((error: any) => {
          let toast = this.toastrService.show('Usuário/Senha não cadastrado!', 3000)
                                        .present();
        });
    }

}
