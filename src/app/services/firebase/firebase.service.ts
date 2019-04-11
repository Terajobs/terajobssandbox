import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

import { Usuario } from 'src/app/services/clases';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private rutas = {
    usuarios: 'users/',
  };

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) { }

  /* ----------------------Registro y login de usuarios---------------------------------------- */
  registrarWithMail(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithMail(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithFb() {
    this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  private createUser(user: Usuario) {
    return this.angularFireDatabase.object(this.rutas.usuarios + user.id + '/').set(user);
  }

  updateUser(user: Usuario) {
    return this.angularFireDatabase.object(this.rutas.usuarios + user.id + '/').update(user);
  }

  getUsers() {
    return new Promise(resolve => {
      this.angularFireDatabase.list(this.rutas.usuarios).snapshotChanges().subscribe(actionArray => {
        console.log(actionArray);
        resolve(actionArray.map(item => {
          return new Usuario(item.payload.val());
        }));
      });
    });
  }

  private promesaLoginCorrecta(data: auth.UserCredential) {
    const user = new Usuario({
      correo: data.user.email,
      id: data.user.uid
    });
    if (data.additionalUserInfo.isNewUser) { // Si es un nuevo usuario
      return this.createUser(user).then(  // registrarlo
        (data2) => {
          return {
            error: false,
            user: user,
            data: data,
            new_user: true

          };
        }
      ).catch((error) => {
        console.log('Hubo un error registrar usuario');
        return this.errorEnPromesa(error);
      });
    } else {  // si el usuario ya habia sido registrado
      return 'En mantenimiento';
    }
  }

  private errorEnPromesa(error: any): {} {
    return {
      error: true,
      data: error
    };
  }


  /* Vacantes */
/*   registrarVacante() {

  } */

}
