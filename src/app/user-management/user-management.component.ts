import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

//componente para el reset de la contraseña
//el menaje del correo se modifica desde la consola de Firebase
//en el archivo del servicio de firebase se ha agregado codigo para manejar el envio del correo
// importante!! falta terminar este componente, por eso no se encuentra en la documentación
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
