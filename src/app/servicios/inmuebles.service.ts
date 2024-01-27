import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  obtenerPropiedades(): Observable<any> {
    const ruta = `${this.url}/propiedades/buscarPropiedades`;
    return this.http.get(ruta);
  }

  obtenerPropiedad(id: any): Observable<any> {
    const ruta = `${this.url}/propiedades/buscarPropiedad/`;
    return this.http.get(ruta + id);
  }

  agregarPropiedad(propiedad: any): Observable<any> {
    console.log('servicio agregar propiedad');
    const ruta = `${this.url}/propiedades/agregarPropiedad`;
    let json = JSON.stringify(propiedad);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(ruta, json, { headers: headers });
  }

  modificarPropiedad(id: any, propiedad: any): Observable<any> {
    const ruta = `${this.url}/propiedades/actualizarPropiedad/`;
    return this.http.put(ruta + id, propiedad);
  }

  eliminarPropiedad(id: any): Observable<any> {
    const ruta = `${this.url}/propiedades/eliminarPropiedad/`;
    return this.http.delete(ruta + id);
  }
}
