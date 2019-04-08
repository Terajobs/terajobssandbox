import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

import { Usuario } from 'src/app/services/clases';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) { }

  /* Registro de usuarios */
  registerWithMail(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  registerWithFb() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  registerWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  registerUser(user: Usuario) {

  }

  /* Login para usuarios */
  loginWithMail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

}
