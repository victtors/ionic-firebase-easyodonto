import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPacientePage } from '../cadastro-paciente/cadastro-paciente';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';
import { EditarPage } from '../editar/editar';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { storage /*initializeApp*/ } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { FIREBASE_CONFIG } from '../../app/firebase.config';

@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html'
})
export class PacientesPage {

  private pacientes;

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider,
    private camera: Camera
    ) {
      //initializeApp(FIREBASE_CONFIG);

      this.pacientes = this.dbService.getAll();
    }
  
    async takePhoto(){
      try{ 
      // defini opçoes camera
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      }
  
     const result = await this.camera.getPicture(options);
  
     const image = `data:image/jpeg;base64,${result}`;
  
     const pictures = storage().ref('pictures/myphoto');
     pictures.putString(image, 'data_url')
  
    }
  
    catch (e) {
      console.error(e);
    }
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