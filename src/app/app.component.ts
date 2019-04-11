import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase/firebase.service';
import { Usuario, RFC } from './services/clases';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'terajobssandbox';

  constructor(private firebase: FirebaseService) {
    /* firebase.loginWithMail('mundo2599@outlook.com', '123456789').then(
      (data) => {
        console.log(data);
      }
    ).catch((error) => {
      console.log(error);
    }); */

    /* firebase.loginWithGoogle().then(
      (data) => {
        console.log(data);
      }
    ).catch((error) => {
      console.log(error);
    }); */

    /* firebase.updateUser(new Usuario({
      // correo: 'mundo2599@gmail.com',
      id: 'sqxzpkyfsjhLHhpVWpbMZZX2Mco1',
      username: 'mundo2599',
      nombre: 'Edmundo',
      apellidoP: 'Gonzalez',
      apellidoM: 'Hernandez',
      curp: 'blablabla',
      rfc: new RFC({
        rfc: 'blablabla',
        validado: false
      }),
      telefono: '3333333333',
      edad: 19,
      genero: 'M',
      estrellas: 5,
      calif_terajobs: 10,
      pasaporte: false,
      visa: false,
      acepta_terms_conds: true
    })); */

    /* firebase.getUsers().then(
      (value) => {
        console.log(value);
      }
    ); */
  }


}
