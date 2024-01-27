import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable()
export class validarTokenGuard implements CanActivate {
  constructor(private usuarioService: UsuariosService){

  }
  canActivate():Observable<boolean> | boolean {
    console.log('canActivate');
    return this.usuarioService.validarToken();
    
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this.usuarioService.validarToken();
     
  }
}
