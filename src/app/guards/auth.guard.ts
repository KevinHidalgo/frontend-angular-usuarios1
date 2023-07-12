import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from '../../app/servicios/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router,private api:ApiService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):boolean{
    if(localStorage.getItem("token") != ""){ // esta autenticado
      return true;
    }
    this.router.navigate(['login'],{ // Debe autenticarse
      queryParams:{returnUrl: state.url}
    });
    return false;
  }
  
}
