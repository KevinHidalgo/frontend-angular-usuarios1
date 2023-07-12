import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
 
  agregarForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
    idRol: new FormControl('',Validators.required)
  });
  
  constructor(private router:Router, private api:ApiService){}

  ngOnInit():void{
    let tokenActual = this.getToken();
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:any){
    this.api.postUser(form).subscribe(data=>{
      console.log(data);
    })
  }


}
