import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ApiService} from '../../servicios/api/api.service';
import {LoginI} from '../../modelos/login.interface';
import {ResponseL} from '../../modelos/ResponseL.interface';

import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService,private router:Router){}

  errorStatus:boolean = false;
  errorMsj:any = "";

  ngOnInit():void{
   // this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem("token")){
      this.router.navigate(['home']);
    }
  }

  onLogin(form: any){
    this.api.loginByEmail(form).subscribe(data=>{
      let dataResponse:ResponseL= data;
      if(dataResponse.success == true){
        localStorage.setItem("token",dataResponse.result);
        localStorage.setItem("rol",dataResponse.rolId.toString());
        console.log(dataResponse);
        this.router.navigate(['home']);
      }else{
        this.errorStatus = true;
        this.errorMsj=dataResponse.message;
      }
    });
  }

}
