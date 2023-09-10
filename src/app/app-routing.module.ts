import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MisionComponent } from './mision/mision.component';




const routes: Routes = [
{path:"",component:HomeComponent, pathMatch:"full"},
{path:"home",component:HomeComponent, pathMatch:"full"},
{path:"mision",component:MisionComponent, pathMatch:"full"},
{path:"login",component:LoginComponent, pathMatch:"full"},
{path:"registro",component:RegistroComponent, pathMatch:"full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
