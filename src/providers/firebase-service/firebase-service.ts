import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrMaskerModule } from 'brmasker-ionic-3';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//Provider utilizado no CRUD

@Injectable()
export class FirebaseServiceProvider {
  private dbRef;

  constructor(public db: AngularFireDatabase) {
    this.dbRef = this.db.list('pacientes'); //simplificando a chamada do this.db
  }

  //Listando os registros do firebase
  getAll(){
    return this.dbRef.snapshotChanges().map(data => {
      return data.map(d => ({key: d.key, ...d.payload.val()}));
    });
  }

  save(paciente: any){
    return this.dbRef
            .push(paciente);
  }

  //Atualizando registro do paciente
  update(paciente){
    return this.dbRef
           .update(paciente.key, paciente);
  }

  //Deletando os registros do firebase
  remove(paciente){
    return this.dbRef
           .remove(paciente.key);

  }

  


}
