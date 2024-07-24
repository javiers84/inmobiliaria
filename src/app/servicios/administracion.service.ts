import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  // private url: string = environment.url;
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  obtenerAdministraciones(): Observable<any> {
    const ruta = `${this.url}/administraciones/buscarAdministraciones`;
    return this.http.get(ruta);
  }

  obtenerAdministracion(id: number): Observable<any> {
    const ruta = `${this.url}/administraciones/buscarAdministracion/`;
    return this.http.get(ruta + id);
  }

  agregarAdministracion(administracion: any): Observable<any> {
    const ruta = `${this.url}/administraciones/agregarAdministracion`;
    let json = JSON.stringify(administracion);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(ruta, json, { headers: headers });
  }

  modificarAdministracion(id: any, administracion: any): Observable<any> {
    const ruta = `${this.url}/administraciones/actualizarAdministracion/`;
    return this.http.put(ruta + id, administracion);
  }

  eliminarAdministracion(id: number): Observable<any> {
    const ruta = `${this.url}/administraciones/eliminarAdministracion/`;
    return this.http.delete(ruta + id);
  }
}
