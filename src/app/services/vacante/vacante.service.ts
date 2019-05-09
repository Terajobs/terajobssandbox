import { Injectable } from '@angular/core';

// Importa la librería de firebase para poder acceder a la base de datos
import { AngularFireDatabase, AngularFireList, } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class VacanteService {

  // Defino una listado de vacantes
  vacantes: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  
  obtenerVacantes()
  {
    /* Obtiene el listado de todas las vacantes de la base de datos
     y las mete a una lista que se retorna cuando se manda a llamar a la funcion*/
    return this.vacantes = this.firebase.list('vacantes2');
    /* NOTA: vacantes2 es el nombre de otra "tabla" de vacantes, la cual hice
       para que coincidiera con todos los datos establecidos en el archivo
       clases.ts, por lo que vacantes2 y vacantes deberia ser una misma en firebase
    */
  }

}
