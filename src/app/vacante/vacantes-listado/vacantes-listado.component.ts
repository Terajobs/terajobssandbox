import { Component, OnInit } from '@angular/core';

// Service
import { VacanteService } from '../../services/vacante/vacante.service'

// Class
import { Vacante } from '../../services/clases';

// Permite el paso de parametros entre componentes atraves de las rutas
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-vacantes-listado',
  templateUrl: './vacantes-listado.component.html',
  styleUrls: ['./vacantes-listado.component.scss'],
  providers: [VacanteService]
})
export class VacantesListadoComponent implements OnInit {

  vacantes : Vacante[]; // arreglo de vacantes
  
  vacante : Vacante;

  /*
  Defini la variable vacante
  Esta almacena temporalmente los datos de la vacante que se seleccione
  para despues pasarlos al componente detalle
  */

  constructor(
    private router: Router,
    private vacanteService: VacanteService
    ) { }

  ngOnInit() {
    this.todasLasVacantes(); // llama al metodo que llenara el arreglo de vacantes
  }

  // Esta funcion llena el arreglo con todas las vacantes disponibles en la base de datos
  todasLasVacantes(){
    this.vacanteService.obtenerVacantes().valueChanges().subscribe(vacantes => this.vacantes = vacantes);
  }

  /* Con esto estoy pasando los datos pertenecientes a la vacante seleccionada 
     a traves de las rutas, para poder mostrarlas en el componente vacante-detalle 
     como si fuera una pagina nueva*/
  navigate(vacante){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:                  vacante.id,
        id_reclutador:       vacante.id_reclutador,
        descripcion:         vacante.descripcion,
        rango_inicial:       vacante.rango_inicial,
        rango_final:         vacante.rango_final,
        estatus_vacante:     vacante.estatus_vacante,
        estado_pais:         vacante.estado_pais,
        ciudad:              vacante.ciudad,
        titulo:              vacante.titulo,
        categoria:           vacante.categoria,
        campo_justificacion: vacante.campo_justificacion
      }
    }

    this.router.navigate(['/app-vacante-detalle'], navigationExtras);
  }

}