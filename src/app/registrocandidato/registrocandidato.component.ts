import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { debug } from 'util';

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
    
    const user = [
      this.username,
      this.email,
      this.telefono,
      this.fecha_nacimiento,
      this.estado,
      this.genero
    ];
    console.log(user);
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
