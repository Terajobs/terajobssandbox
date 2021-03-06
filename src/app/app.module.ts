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
import { AngularFireModule } from '@angular/fire';
import { VacanteDetalleComponent } from './vacante/vacante-detalle/vacante-detalle.component';
import { VacantesListadoComponent } from './vacante/vacantes-listado/vacantes-listado.component';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UserManagementComponent } from './user-management/user-management.component';
import { LandingComponent } from './landing/landing.component';


import {AngularFireDatabaseModule} from '@angular/fire/database';
import { FiltrosComponent } from './filtros/filtros.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro_candidato/:id', component: RegistrocandidatoComponent },
  {path: 'login', component:LoginComponent},
  {path: 'pass', component:UserManagementComponent},
  {path: 'landing', component:LandingComponent},
  {path:'app-vacante-detalle', component:VacanteDetalleComponent},
  {path:'app-vacantes-listado', component:VacantesListadoComponent},
  {path: 'register', component:RegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrocandidatoComponent,
    UserManagementComponent,
    LandingComponent,
    VacanteDetalleComponent,
    VacantesListadoComponent,
    FiltrosComponent,
    BusquedaComponent,
    HomeComponent,
    RegisterComponent
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
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
