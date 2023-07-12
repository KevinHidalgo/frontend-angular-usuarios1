import { Component } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import{listaUsuariosI} from '../../modelos/listaUsuarios.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios:any;

  constructor(private api:ApiService,private router:Router){

  }

  ngOnInit():void{
    this.api.getAllUsers().subscribe(data =>{
      this.usuarios=data;
    })
  }

  editarUsuario(id:number){
    this.router.navigate(['modificar',id]);
  }

  nuevoUsuario(){
    this.router.navigate(['nuevo']);
  }


}
