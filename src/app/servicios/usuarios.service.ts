import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthResponse } from '../interfaces/interfaces';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = environment.url;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  agregarUsuario(usuario: any): Observable<any>{
    // const ruta = `${this.url}/auth/crear`;
    const ruta = 'http://localhost:3000/api/auth/crear';

    let json = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.httpClient.post(ruta, json, { headers: headers });
  }

  obtenerUsuario(identificador: any): Observable<any> {
    const ruta = `${this.url}/auth/buscarUsuario/`;
    return this.httpClient.get(ruta + identificador);
  }

  login(usuario: any): Observable<any> {
    const ruta = `${this.url}/auth/login`;
    return this.httpClient.post<AuthResponse>(ruta, usuario);
  }

  isLogued() {
    return localStorage.getItem('token') == null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  validarToken(): Observable<any> {
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    return this.httpClient.get<AuthResponse>(`${this.url}/auth/validarToken`, { headers }).pipe(
      map(res => {
        return res.ok;
      }),
      catchError(err => of(false)),
    );
}
}
