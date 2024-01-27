import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { authGuardGuard } from '../../guards/auth-guard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  role: any;

  constructor(public usuarioService: UsuariosService,
              private router: Router,
              public authGuard: authGuardGuard
              ) { }

  ngOnInit() {
  }

  abrirMenu(){
    const nav = document.querySelector("#nav");
    const boton = document.querySelector("#abrir");
    nav!.classList.add("visible");
    boton!.setAttribute("style", "display: none;");
  }

  cerrarMenu(){
    const nav = document.querySelector("#nav");
    const boton = document.querySelector("#abrir");
    nav!.classList.remove("visible");
    boton!.setAttribute("style", "display: block;");
  }

  verificarRole(){
    this.role = localStorage.getItem('role');

    this.authGuard.canActivate();

    return this.role;
  }

  logout(e: any){
    this.usuarioService.logout();
  }
}