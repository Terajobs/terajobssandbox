import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase/firebase.service';
import { Usuario, RFC, Vacante, Oferta, Habilidad } from './services/clases';


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

    /* firebase.createVacante(new Vacante({
      campoJustificacion: true,
      categoria: 'Consultante',
      estado: 'Guanajuato',
      nombreReclutador: 'Guadalupe Sierra',
      rangoFinal: 30000,
      rangoInicial: 2500,
      titulo: 'Consultant'
    })); */

    firebase.getHabilidades().then(
      (value) => {
        console.log(value);
      }
    );

    /* firebase.createOferta(new Oferta({
      imagen: 'alguna url',
      producto: 'blabla',
      cantidad: 40,
      precio: 40000
    })); */

    /* firebase.createHabilidad(new Habilidad({
      habilidad: 'Assembly',
      porcentaje: 100,
      categoria: 'Programacion'
    })); */

  }


}
