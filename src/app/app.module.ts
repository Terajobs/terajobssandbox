import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

// Componentes
import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { RegistrocandidatoComponent } from './registrocandidato/registrocandidato.component';
import { VacanteDetalleComponent } from './vacante/vacante-detalle/vacante-detalle.component';
import { VacantesListadoComponent } from './vacante/vacantes-listado/vacantes-listado.component';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import {AngularFireDatabaseModule} from '@angular/fire/database';//
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FiltrosComponent } from './filtros/filtros.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const appRoutes:Routes= [
  {path:'',component:RegistrocandidatoComponent},
  {path:'registro_candidato', component:RegistrocandidatoComponent},
  {path:'app-vacante-detalle', component:VacanteDetalleComponent},
  {path:'app-vacantes-listado', component:VacantesListadoComponent},
  { path: 'login', component: LoginComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrocandidatoComponent,
    VacanteDetalleComponent,
    VacantesListadoComponent,
    LoginComponent,
    RegistrocandidatoComponent,
    FiltrosComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ImageCropperModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }