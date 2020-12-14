import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {AsociacionsService} from 'src/app/services/asociacions.service';
import {Asociacion} from 'src/app/models/asociacion';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Output()
  n  = new EventEmitter<number>();
  
  asociaciones: any;
  authService : AuthService;
  documentos : any;
  

  constructor(private ascService:AsociacionsService, private router:Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.ascService.getAsociacion().subscribe(
      (data)=>{
        this.asociaciones = data['cursor_asociacion'];
        console.log("Asociaciones", this.asociaciones);
        
      }
    )
  }

  id(num:number){
    alert(num);
    this.n.emit(num);
    alert(this.n);
  }

  cargarReq(num:number):void{
    if(num){
      this.ascService.getReq(num).subscribe(
        (data)=>{
        this.documentos=data['cursor_req_asc'];
        console.log( "Documentos", this.documentos);
        this.router.navigate(['/listreq']);
      })
    }
}

  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito`, 'success')
    this.router.navigate(['/login']);
  }

}
