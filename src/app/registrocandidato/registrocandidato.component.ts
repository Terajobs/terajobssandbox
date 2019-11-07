import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { debug } from 'util';
import { Usuario } from '../services/clases';
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-registrocandidato',
  templateUrl: './registrocandidato.component.html',
  styleUrls: ['./registrocandidato.component.scss']
})
export class RegistrocandidatoComponent implements OnInit {

  id: string;
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

  constructor(private route: ActivatedRoute, public servicio: FirebaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  registrar(){
    
    var usuario = new Usuario;

    usuario.username = this.username;
    // usuario.email = this.email;
    usuario.telefono = this.telefono;
    usuario.fecha_nacimiento = this.fecha_nacimiento;
    usuario.estado_pais = this.estado; 
    // TODO: Verificar lo del estadado, fecha de nacimiento, etc, se encuentra en 
    usuario.genero = this.genero;
    usuario.id = this.id;
    // usuario.estado_pais


    console.log(usuario);
    this.servicio.updateUser(usuario).then(
      (data) => {
        console.log(data);
        console.log('correcto');
      }
    ).catch((error) => {
      console.log(error);
    });

    // console.log(this.crear_curriculum);
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
