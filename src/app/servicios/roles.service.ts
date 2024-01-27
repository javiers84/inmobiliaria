import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url: string = environment.url;

  constructor(
              private httpClient: HttpClient,
              private router: Router
  ) { }

  agregarRole(role: any): Observable<any>{
    const ruta = `${this.url}/roles/agregarRole`;
    return this.httpClient.post(ruta, role);
  }

  obtenerRoles(): Observable<any> {
    const ruta = `${this.url}/roles/buscarRoles`;
    return this.httpClient.get(ruta);
  }

  obtenerRole(identificador: any): Observable<any> {
    const ruta = `${this.url}/roles/buscarRole/`;
    return this.httpClient.get(ruta + identificador);
  }

  modificarRole(id: any, role: any): Observable<any> {
    const ruta = `${this.url}/roles/actualizarRole/`;
    return this.httpClient.put(ruta + id, role);
  }

  eliminarRole(id: number): Observable<any> {
    const ruta = `${this.url}/roles/eliminarRole/`;
    return this.httpClient.delete(ruta + id);
  }
}
