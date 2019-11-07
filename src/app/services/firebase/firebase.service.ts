import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';

import { Usuario, Vacante, Oferta, Habilidad } from 'src/app/services/clases';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  VACANTES;
  dataSubject$ = new Subject<any>();

  private rutas = {
    usuarios: 'users/',
    vacantes: 'vacantes/',
    ofertas: 'ofertas/',
    habilidades: 'habilidades/'
  };

  constructor(private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase, private fireStorage: AngularFireStorage) { }

  /* ----------------------Registro y login de usuarios---------------------------------------- */
  registrarWithMail(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithMail(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithFb() {
    this.fireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  loginWithGoogle() {
    return this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (data) => {
        return this.promesaLoginCorrecta(data);
      }
    ).catch((error) => {
      return this.errorEnPromesa(error);
    });
  }

  /* --------------------------------------Usuario---------------------------------------------- */
  private createUser(user: Usuario) { // mandado a llmar al registrar
    return this.fireDatabase.object(this.rutas.usuarios + user.id + '/').set(user);
  }

  updateUser(user: Usuario) {
    return this.fireDatabase.object(this.rutas.usuarios + user.id + '/').update(user);
  }

  getUsers() {
    return new Promise(resolve => {
      this.fireDatabase.list(this.rutas.usuarios).snapshotChanges().subscribe(actionArray => {
        console.log(actionArray);
        resolve(actionArray.map(item => {
          return new Usuario(item.payload.val());
        }));
      });
    });
  }

/* ----------------------------------Vacante-------------------------------------------------- */
  createVacante(vacante: Vacante) {
    // return this.fireDatabase.object(this.rutas.vacantes + vacante.id + '/').set(vacante);
    const obj = this.fireDatabase.database.ref(this.rutas.vacantes).push(vacante);
    vacante.id = obj['key'].toString();
    this.updateVacante(vacante);
  }

  updateVacante(vacante: Vacante) {
    return this.fireDatabase.object(this.rutas.vacantes + vacante.id + '/').update(vacante);
  }

  getVacantes() {
    return new Promise<Vacante[]>(resolve => {
      this.fireDatabase.list(this.rutas.vacantes).snapshotChanges().subscribe(actionArray => {
        console.log(actionArray);
        resolve(actionArray.map(item => {
          return new Vacante(item.payload.val());
        }));
      });
    });
  }

  getVacant() {
    return this.dataSubject$.asObservable();
}


  /* ----------------------------------Filtro-------------------------------------------------- */

  getDataFilter(palabra: string, categorie: string) {
    var objectData = {};
    this.fireDatabase.database.ref('vacantes')
        .orderByChild(categorie)
        .equalTo(palabra)
        .on('value', snap => {
        objectData = snap.val();
    });   
    let obj = Object.values(objectData);
    this.dataSubject$.next(obj);
/*     console.log(objectData);
 */
}

  /* ----------------------------------Ofertas-------------------------------------------------- */
  createOferta(oferta: Oferta) {
    const obj = this.fireDatabase.database.ref(this.rutas.ofertas).push(oferta);
    oferta.id = obj['key'].toString();
    this.updateOferta(oferta);
  }

  updateOferta(oferta: Oferta) {
    return this.fireDatabase.object(this.rutas.ofertas + oferta.id + '/').update(oferta);
  }

  getOfertas() {
    return new Promise(resolve => {
      this.fireDatabase.list(this.rutas.ofertas).snapshotChanges().subscribe(actionArray => {
        console.log(actionArray);
        resolve(actionArray.map(item => {
          return new Oferta(item.payload.val());
        }));
      });
    });
  }

    /* ----------------------------------Habilidad-------------------------------------------------- */
    createHabilidad(habilidad: Habilidad) {
      const obj = this.fireDatabase.database.ref(this.rutas.habilidades).push(habilidad);
      habilidad.id = obj['key'].toString();
      this.updateHabilidad(habilidad);
    }

    updateHabilidad(habilidad: Habilidad) {
      return this.fireDatabase.object(this.rutas.habilidades + habilidad.id + '/').update(habilidad);
    }

    getHabilidades() {
      return new Promise(resolve => {
        this.fireDatabase.list(this.rutas.habilidades).snapshotChanges().subscribe(actionArray => {
          console.log(actionArray);
          resolve(actionArray.map(item => {
            return new Habilidad(item.payload.val());
          }));
        });
      });
    }


  /* ---------------------------------------------------------------------------- */
  subirArchivo(file: any) {
    const ref = this.fireStorage.ref('/files');
    const task = ref.put(file);
    /* const uploadState = task.snapshotChanges().pipe(map(s => s.state)); */
    const uploadProgress = task.percentageChanges();
    /* const downloadURL = task.downloadURL(); */

  }

  resetPasswordInit(email: string) {
    return this.fireAuth.auth.sendPasswordResetEmail(email);
  }


  /* -------Metodos para manejar promesas de login-------------- */
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

}