import { Component, OnInit } from '@angular/core';

// Este me permite usar el envio de parametros entre componentes
import { ActivatedRoute } from '@angular/router';

// Class
import { Vacante } from '../../services/clases';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-vacante-detalle',
  templateUrl: './vacante-detalle.component.html',
  styleUrls: ['./vacante-detalle.component.scss'],
})
export class VacanteDetalleComponent implements OnInit {

  vacante: Vacante;

  //declare cada variable que contiene la clase vacante
  id:                  string;
  id_reclutador:       number;
  descripcion:         string;
  rango_inicial:       number;
  rango_final:         number;
  estatus_vacante:     number;
  estado_pais:         string;
  ciudad:              string;
  titulo:              string;
  categoria:           string;
  campo_justificacion: string;

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.obtieneDatos();
  }

  /*esta funcion atrapa los datos enviados atraves de la ruta
    para despues guardarlos en cada una delas variables declaradas 
    previamente*/
  obtieneDatos(){
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
      this.id = params.id;
      this.id_reclutador = params.id_reclutador;
      this.descripcion = params.descripcion;
      this.rango_inicial = params.rango_inicial;
      this.rango_final = params.rango_final;
      this.estatus_vacante = params.estatus_vacante;
      this.estado_pais = params.estado_pais;
      this.ciudad = params.ciudad;
      this.titulo = params.titulo;
      this.categoria = params.categoria;
      this.campo_justificacion = params.campo_justificacion;
    });

  }
  
}
