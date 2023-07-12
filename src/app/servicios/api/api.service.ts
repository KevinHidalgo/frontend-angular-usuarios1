import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {listaUsuariosI} from '../../modelos/listaUsuarios.interface';
import {UsuarioI} from '../../modelos/usuario.interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//  private user:string="";
  url:string = "https://localhost:7266/api/";
  constructor(private http:HttpClient) {

   }

 /*  getUser(){
    return this.user;
   }*/

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion=this.url + "Login/login"
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllUsers():Observable<listaUsuariosI[]>{
  let direccion=this.url + "Usuarios/listar"
    return this.http.get<listaUsuariosI[]>(direccion);
  }

  getIdUsuario(id:any):Observable<UsuarioI>{
    let direccion=this.url + "Usuarios/listarId?id=" + id;
    return this.http.get<UsuarioI>(direccion);
  }

  putUser(form:UsuarioI,id:any):Observable<ResponseI>{
  let direccion=this.url + "Usuarios/modificar?id=" + id;
  let headers=new HttpHeaders().set("Authorization","Bearer "+ localStorage.getItem("token"));
    return this.http.put<ResponseI>(direccion,form,{headers:headers});
  }

  deleteUser(id:any):Observable<ResponseI>{
    let direccion=this.url + "Usuarios/eliminar?id=" + id;
    let headers=new HttpHeaders().set("Authorization","Bearer "+ localStorage.getItem("token"));
  
    return this.http.delete<ResponseI>(direccion,{headers:headers});
  }

  postUser(form:UsuarioI):Observable<ResponseI>{
    let direccion=this.url + "Usuarios/guardar";
    let headers=new HttpHeaders().set("Authorization","Bearer "+ localStorage.getItem("token"));
    
      return this.http.post<ResponseI>(direccion,form,{headers:headers});
  }
}
