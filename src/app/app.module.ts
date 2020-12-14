import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/asociacion/listar/listar.component';
import { AsociacionsService } from './services/asociacions.service';
import {HttpClientModule} from '@angular/common/http';
import { ListReqascComponent } from './components/documentos/list-reqasc/list-reqasc.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DocumentoService } from './services/documento.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListReqascComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AsociacionsService,
              DocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
