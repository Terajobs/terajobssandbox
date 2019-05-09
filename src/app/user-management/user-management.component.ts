import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  email = '';

  constructor(public servicio: FirebaseService) { }

  ngOnInit() {
  }

  doPassReset()
  {
this.servicio.resetPasswordInit(this.email)
.then(
    () => alert('Se ha enviado a tu correo un link para reestablecer tu contraseña'));
  }
}
