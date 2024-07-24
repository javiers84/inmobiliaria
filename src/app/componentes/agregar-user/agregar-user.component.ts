import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { RolesService } from '../../servicios/roles.service';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrl: './agregar-user.component.css'
})
export class AgregarUserComponent implements OnInit {

  usuarios: any;
  roles: any;

  user: any;
  mail: any;
  password: any;
  nombre: any;
  telefono: any;
  idRole: any;

  imagen: any;
  imagenSeleccionada: any;

  constructor(
              private usuarioServices: UsuariosService,
              private roleService: RolesService
  ) {
    this.filtrarPorRole();
   }

   onFileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagen = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionada = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile() {

    this.imagenSeleccionada = "";
  }

  agregarUsuario(){
    var usuario: any = {
      user: this.user,
      mail: this.mail,
      password: this.password,
      nombre: this.nombre,
      telefono: this.telefono,
      imagen: this.imagen,
      role: this.idRole
    }
    this.usuarioServices.agregarUsuario(usuario).subscribe(resultado => {
      alert("usuario agregado exitosamente");
    });

    this.user = "";
    this.mail = "";
    this.password = "";
    this.nombre = "";
    this.telefono = "";
    this.imagen = "";
    this.imagenSeleccionada = "";
    this.idRole = "";
  }

  filtrarPorRole(){
    this.roleService.obtenerRoles().subscribe(resultado => {
      this.roles = resultado.roles;
    });
  }

  ngOnInit() {
  }

}