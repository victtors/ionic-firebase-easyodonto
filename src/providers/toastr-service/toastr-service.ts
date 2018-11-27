import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastrServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastrServiceProvider {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello ToastrServiceProvider Provider');
  }

  //Mensagem que aparece no bottom(rodapé)
  show(msg, duracao){
    const toast = this.toastCtrl.create({
      message: msg,
      duration: duracao
    });
    return toast;
  }

}
