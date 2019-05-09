import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrocandidatoComponent } from './registrocandidato/registrocandidato.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserManagementComponent } from './user-management/user-management.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: RegistrocandidatoComponent },
  { path: 'registro_candidato', component: RegistrocandidatoComponent },
  {path: 'login', component:LoginComponent},
  {path: 'pass', component:UserManagementComponent},
  {path: 'landing', component:LandingComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrocandidatoComponent,
    UserManagementComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ImageCropperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
