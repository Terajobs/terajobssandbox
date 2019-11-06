import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CATEGORIAS,LUGAR } from '../declaraciones/filterOptions';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  opcionSeleccionado;
  opcionSeleccion;
  @Output() usuarioSeleccionado = new EventEmitter();
  @Output() usuarioSeleccion = new EventEmitter();
  CATE;
  LU;
  categorieForm: FormGroup;
  placeForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.CATE = CATEGORIAS;
    this.LU = LUGAR;
  }

  ngOnInit() {
    this.categorieForm = this.fb.group({
      categorieControl: ['Ventas']
    });
    this.placeForm = this.fb.group({
      placeControl: ['Estado']
    });
  }

  onUserSelected () {
    this.usuarioSeleccionado.emit(this.opcionSeleccionado);
  }
  
  onSelected () {
    this.usuarioSeleccion.emit(this.opcionSeleccion);
  }
}
