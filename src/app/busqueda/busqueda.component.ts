import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { Vacante } from '../services/clases';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  @Input() categorie;
  @Input() place;
  myData = [];
  observerData:  Observable <any[]>;
  textInput: string;
  isValidate: Boolean;
  cat: string;
  constructor(public fvs: FirebaseService  ) {
    this.isValidate = true;
    this.myData = this.fvs.VACANTES;
    this.textInput='';
  }
  setSeleccionado(usuario) {
    this.categorie = usuario;
  }
  setSeleccion(lugar) {
    this.place = lugar;
  }
  ngOnInit() {
    this.observerData = this.fvs.getVacant();
    this.observerData.subscribe ( vac => this.myData = vac);
  }

  isValidateC(){
    this.isValidate = false;
  }
  
  filterData() {
  if(this.textInput === ''){
   this.fvs.getDataFilter(this.categorie, 'categoria');
  } else {
    
    this.fvs.getDataFilter(this.textInput, this.place);
  }
  }

}
