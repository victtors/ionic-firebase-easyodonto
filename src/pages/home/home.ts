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

import { FingerprintAIO ,FingerprintOptions} from '@ionic-native/fingerprint-aio';

import { User } from '../../providers/auth/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fingerprintOptions : FingerprintOptions;
  private pacientes;
  user: User = new User();

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider,
    private authService: AuthServiceProvider,
    public toastrService: ToastrServiceProvider,
    private fingerAuth: FingerprintAIO
    ) {

      this.pacientes = this.dbService.getAll();
    }

    public showFingerprintAuthDlg(){
      this.fingerprintOptions = {
          clientId: 'fingerprint-Demo',
          clientSecret: 'password', //Only necessary for Android
          disableBackup:true  //Only for Android(optional)
      }
      this.fingerAuth.isAvailable().then(result =>{
      if(result === "OK")
      {
          this.fingerAuth.show(this.fingerprintOptions)
          .then((result: any) => console.log(result))
          .catch((error: any) => console.log(error));
      }
      });
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
