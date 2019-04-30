import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email = '';
  password = '';
  constructor(public servicio: FirebaseService) {

  }

  ngOnInit() {
   /*  this.servicio.registrarWithMail('nazazuke@hotmail.com','ashe123').then(data => {

    }, error => {

    }); */
  }

  doLogin() {
    this.servicio.loginWithMail(this.email, this.password).then(
      (data) => {
        console.log(data);
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  doLoginFB() {
    this.servicio.loginWithFb();
  }
  doLoginGoogle() {
    this.servicio.loginWithGoogle().then(data => {

    }, error => {

    });
  }
}
