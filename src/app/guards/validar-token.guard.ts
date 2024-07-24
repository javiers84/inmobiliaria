import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Injectable()
export class validarTokenGuard implements CanActivate {
  constructor(private usuarioService: UsuariosService,
              private router: Router
    ){

  }
  canActivate():Observable<boolean> | boolean {
    if(this.usuarioService.isLogued()){

      console.log('error por no tener autenticacion');

      alert('debe estar logueado para acceder');

      this.router.navigateByUrl('/login');
      return this.usuarioService.validarToken();
      
    }else 
    return this.usuarioService.validarToken();
    
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this.usuarioService.validarToken();
     
  }
}
