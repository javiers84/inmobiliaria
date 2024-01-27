import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<any> {
    const ruta = `${this.url}/clientes/buscarClientes`;
    return this.http.get(ruta);
  }

  obtenerCliente(id: number): Observable<any> {
    const ruta = `${this.url}/clientes/buscarCliente/`;
    return this.http.get(ruta + id);
  }

  agregarCliente(cliente: any): Observable<any> {
    const ruta = `${this.url}/clientes/agregarCliente`;
    let json = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(ruta, json, { headers: headers });
  }

  modificarCliente(id: any, cliente: any): Observable<any> {
    const ruta = `${this.url}/clientes/actualizarCliente/`;
    return this.http.put(ruta + id, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    const ruta = `${this.url}/clientes/eliminarCliente/`;
    return this.http.delete(ruta + id);
  }
}
