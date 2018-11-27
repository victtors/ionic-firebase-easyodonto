import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { CadastroPacientePage } from '../pages/cadastro-paciente/cadastro-paciente';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrServiceProvider } from '../providers/toastr-service/toastr-service';
import { EditarPage } from '../pages/editar/editar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPacientePage,
    ListPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD_j_ACa48K46VVJdINWED2LGFUxOZ9Y4s",
      authDomain: "easyodonto-ccb4f.firebaseapp.com",
      databaseURL: "https://easyodonto-ccb4f.firebaseio.com",
      projectId: "easyodonto-ccb4f",
      storageBucket: "easyodonto-ccb4f.appspot.com",
      messagingSenderId: "764649080199"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPacientePage,
    ListPage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    ToastrServiceProvider
  ]
})
export class AppModule {}
