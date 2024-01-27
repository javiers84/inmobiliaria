import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable()
export class rolesGuard implements CanActivate {

  constructor(private usuarioService: UsuariosService,
    private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.verificarLogin(route);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  verificarLogin(route: ActivatedRouteSnapshot): boolean {

    var role = localStorage.getItem('role');

    console.log('role de acceso a ruta: ' + role!.includes(route.data['role']));

    // if(role?.includes(route.data.role)){
      // if (route.data.role.includes(role)) {
    if (!route.data['role'].includes(role)) {
      return true;
    } else if (role != null) {
      return true;
    } else{
      alert('debes estar logueado para ingresar');
      this.router.navigate(['./login']);
      return false;
    }

  }
}
