import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { debug } from 'util';
import { Usuario } from '../services/clases';

@Component({
  selector: 'app-registrocandidato',
  templateUrl: './registrocandidato.component.html',
  styleUrls: ['./registrocandidato.component.scss']
})
export class RegistrocandidatoComponent implements OnInit {

  username:string = "";
  email:string = "";
  telefono:string = "";
  fecha_nacimiento:string="";
  estado:string = "";
  genero:string = "";
  cv:any = '';
  croppedImage: any = '';
  croppedImageCV: any = '';

  
  imageChangedEvent: any = '';
  imageChangedEventCV: any = '';
  crear_curriculum:boolean = false;
  value: string = '';

  constructor() { }

  ngOnInit() {
  }

  registrar(){
    
    var usuario = new Usuario;

    usuario.username = this.username;
    usuario.email = this.email;
    usuario.telefono = this.telefono;
    usuario.fecha_nacimiento = this.fecha_nacimiento;
    // usuario.estado_pais = this.estado; Cambiar el tipo de dato string a number
    // TODO: Verificar lo del estadado, fecha de nacimiento, etc, se encuentra en 
    usuario.genero = this.genero;
    
    console.log(usuario);
    console.log(this.crear_curriculum);
  }
  
  guardarCV(){
    
  }

  
    
  fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
  }

  fileChangeEventCV(event: any): void {
    this.imageChangedEventCV = event;
  }
  imageCroppedCV(event: ImageCroppedEvent) {
    this.croppedImageCV = event.base64;
  }

    changeCrearCurriculum(){
      if(this.value == "true"){
        this.crear_curriculum = true;
      } 
      else{
        this.crear_curriculum = false;
      }
      console.log("si llego");
         
    }
    

}
