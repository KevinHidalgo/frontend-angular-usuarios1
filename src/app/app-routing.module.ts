import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'
import { NuevoComponent } from './vistas/nuevo/nuevo.component'
import { ModificarComponent } from './vistas/modificar/modificar.component'
import { HomeComponent } from './vistas/home/home.component'
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent, canActivate:[NoAuthGuard]},
  { path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  { path:'nuevo',component:NuevoComponent, canActivate:[AuthGuard]},
  { path:'modificar/:id',component:ModificarComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,HomeComponent,NuevoComponent,ModificarComponent]