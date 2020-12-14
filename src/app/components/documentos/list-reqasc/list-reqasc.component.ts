import { Component, OnInit , Input} from '@angular/core';
import { DocumentoService } from 'src/app/services/documento.service';
import { Router } from '@angular/router';
import {ListarComponent} from 'src/app/components/asociacion/listar/listar.component';



@Component({
  selector: 'app-list-reqasc',
  templateUrl: './list-reqasc.component.html',
  styleUrls: ['./list-reqasc.component.css']
})
export class ListReqascComponent implements OnInit {


@Input()
nom : number=0;

numero:number;
reqasc : any;

asc: ListarComponent ;  

  constructor(private reqService : DocumentoService, private route: Router) { }

  ngOnInit(): void {
    
  }

  cargarReq(num:number){
    this.route.navigate(['/listreq']);
    console.log(num);
    this.nom=num;
    if(this.numero){
      alert(this.nom);
      this.reqService.getReq(this.nom).subscribe(
        (data)=>{
        this.reqasc=data['cursor_req_asc'];
        console.log( "Documentos", this.reqasc);
        this.route.navigate(['/listreq']);
      })
    }
  }
 
}



