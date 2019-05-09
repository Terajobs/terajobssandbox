import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public angularFireAuth:AngularFireAuth) { }
  loginWithMail(email:string,password:string){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password);

  }

  registerWithMail(email:string,password:string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }
}
