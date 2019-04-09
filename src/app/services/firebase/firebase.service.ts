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
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (data) => {
        console.log(data);
        const user = new Usuario({
          correo: data.user.email,
          id: data.user.uid
        });
        this.registerUser(user);
      }
    ).catch((error) => {
      alert('Hubo un error registrar correo');
      console.log(error);
    });
  }

  registerWithFb() {
    this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (data) => {
        console.log(data);
        const user = new Usuario({
          correo: data.user.email,
          id: data.user.uid
        });
        this.registerUser(user);
      }
    ).catch((error) => {
      alert('Hubo un error registrar facebook');
      console.log(error);
    });
  }

  registerWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (data) => {
        console.log(data);
        // data.additionalUserInfo.isNewUser
        const user = new Usuario({
          correo: data.user.email,
          id: data.user.uid
        });
        this.registerUser(user);
      }
    ).catch((error) => {
      alert('Hubo un error registrar google');
      console.log(error);
    });
  }

  registerUser(user: Usuario) {
    // return this.angularFireDatabase.object('/users/' + user.id + '/').set(user);
    this.angularFireDatabase.object('/users/' + user.id + '/').set(user).then(
      (data) => {
        console.log(data);
      }
    ).catch((error) => {
      alert('Hubo un error registrar usuario');
      console.log(error);
    });
  }

  /* Login para usuarios */
  loginWithMail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithFb() {

  }

  loginWithGoogle() {

  }

}
