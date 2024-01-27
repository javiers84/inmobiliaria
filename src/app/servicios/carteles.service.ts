import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CartelesService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  obtenerCarteles(): Observable<any> {
    const ruta = `${this.url}/carteles/buscarCarteles`;
    return this.http.get(ruta);
  }

  obtenerCartel(id: number): Observable<any> {
    const ruta = `${this.url}/carteles/buscarCartel/`;
    return this.http.get(ruta + id);
  }

  agregarCartel(cartel: any): Observable<any> {
    const ruta = `${this.url}/carteles/agregarCartel`;
    let json = JSON.stringify(cartel);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(ruta, json, { headers: headers });
  }

  modificarCartel(id: any, cartel: any): Observable<any> {
    const ruta = `${this.url}/carteles/actualizarCartel/`;
    return this.http.put(ruta + id, cartel);
  }

  eliminarCartel(id: number): Observable<any> {
    const ruta = `${this.url}/carteles/eliminarCartel/`;
    return this.http.delete(ruta + id);
  }
}
