import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  obtenerSliders(): Observable<any> {
    const ruta = `${this.url}/slider/buscarSlideres`;
    return this.http.get(ruta);
  }

  obtenerSlider(id: number): Observable<any> {
    const ruta = `${this.url}/slider/buscarSlider/`;
    return this.http.get(ruta + id);
  }

  agregarSlider(slider: any): Observable<any> {
    const ruta = `${this.url}/slider/agregarSlider`;
    let json = JSON.stringify(slider);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(ruta, json, { headers: headers });
  }

  modificarSlider(id: any, slider: any): Observable<any> {
    const ruta = `${this.url}/slider/actualizarSlider/`;
    return this.http.put(ruta + id, slider);
  }

  eliminarSlider(id: number): Observable<any> {
    const ruta = `${this.url}/slider/eliminarSlider/`;
    return this.http.delete(ruta + id);
  }
}
