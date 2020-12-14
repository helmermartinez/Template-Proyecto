import { Injectable } from '@angular/core';
import {Documentos} from '../models/documentos';
import {Observable, of, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Asociacion } from '../models/asociacion';
import {catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private docUrl:string = 'http://localhost:8080/documento/req';

  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }

    private addAuthorizationHeader(){
      let token = this.authService.token;
                
      if(token!=null){
        return this.httpHeaders.append('Authorization','Bearer '+ token);
      }
      return this.httpHeaders;
    }
    private isNoAutorization(e): boolean{
      if(e.status==401 || e.status==403){
        this.router.navigate(['/login'])
        return true;
      }
      return false;
    }

  getReq(id:number):Observable<any> {
    alert(id);
    return this.http.get(`${this.docUrl}/${id}`,{headers:this.addAuthorizationHeader()}).pipe(
      catchError(e =>{
        this.router.navigate(['/listasc']);
        console.error(e.error.mensaje);
        Swal.fire('Error No Documentos', e.error.mensaje, 'error');
          return e;
      })
    );
  }
}

