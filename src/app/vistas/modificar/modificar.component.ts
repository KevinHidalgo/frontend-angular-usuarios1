import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UsuarioI} from '../../modelos/usuario.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  datosUsuario!: UsuarioI;
  editarForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
    idRol: new FormControl('',Validators.required)
  });
  
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService){}

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit():void{
    let usuarioId=this.activerouter.snapshot.paramMap.get('id');
    let tokenActual = this.getToken();
    this.api.getIdUsuario(usuarioId).subscribe(data =>{
  
    this.datosUsuario=data;

     this.editarForm.setValue({
        nombre: this.datosUsuario.nombre,
        clave: this.datosUsuario.clave,
        idRol: this.datosUsuario.idRol
      }); 
      
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  putForm(form:any){
    this.api.putUser(form,this.datosUsuario.idUsuario).subscribe(data=>{
      if(data.success==true){
        this.router.navigate(['home']);
      }else{
        this.errorStatus = true;
        this.errorMsj="Error al modificar usuario";
      }
    })
  }

  eliminar(){
    this.api.deleteUser(this.datosUsuario.idUsuario).subscribe(data=>{
      if(data.success==true){
        this.router.navigate(['home']);
      }else{
        this.errorStatus = true;
        this.errorMsj="Error al eliminar usuario";
      }
    });
  }

}
