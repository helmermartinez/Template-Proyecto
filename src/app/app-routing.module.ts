import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/asociacion/listar/listar.component';
import { ListReqascComponent } from './components/documentos/list-reqasc/list-reqasc.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'listasc', component:ListarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'listreq', component: ListReqascComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
