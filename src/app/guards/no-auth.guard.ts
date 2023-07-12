import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from '../../app/servicios/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router:Router,private api:ApiService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(localStorage.getItem("token") != ""){ //Esta autenticado
        this.router.navigate(['home']);
        return false;
      }
      return true; //Debe autenticarse
  }
  
}
