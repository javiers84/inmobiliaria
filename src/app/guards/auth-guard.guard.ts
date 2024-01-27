import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable()
export class authGuardGuard implements CanActivate {

  constructor(private router: Router,
              private usuarioService: UsuariosService
    ){ }

  canActivate(): boolean {
    if(this.usuarioService.isLogued()){

      console.log('error por no tener autenticacion');

      alert('debe estar logueado para acceder');

      this.router.navigateByUrl('/login');
      return false;
      
    }else 
    return true;
  }
  
}