import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  logueo: any;
  user: any;
  pass: any;

  usuario!: UsuarioModel;

  constructor(private usuarioService: UsuariosService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUsuario() {

    var logueo = {
      user: this.user,
      password: this.pass
    }
    
    this.usuarioService.login(logueo).subscribe((resultado) => {
      var token = resultado.token;
      localStorage.setItem('token', resultado.token);
      localStorage.setItem('id', resultado.uid);
      localStorage.setItem('role', resultado.role.nombre);

      var tokken = localStorage.getItem('token') == null;
      
      if( tokken ) {
        alert('Usuario y/o Password incorrectos');
        return;
      }

      this.router.navigate(['/home']);
    });
    
    
    this.user = "";
    this.pass = "";
  }

  login( form: NgForm ){
    if(form.invalid){ return; }

    console.log(form);
    console.log(this.usuario);
  }

}