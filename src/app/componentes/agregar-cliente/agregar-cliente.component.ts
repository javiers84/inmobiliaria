import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrl: './agregar-cliente.component.css'
})
export class AgregarClienteComponent implements OnInit {

  propiedades: any;

  nombre: any;
  domicilio: any;
  ciudad: any;
  provincia: any;
  celular: any;
  mail: any;
  condicionCliente: any;
  idPropiedad: any;

  constructor(private inmueblesServices: InmueblesService,
              private clienteService: ClientesService) {
    this.obtenerPropiedades();
   }

  ngOnInit() {
  }

  obtenerPropiedades(){
    this.inmueblesServices.obtenerPropiedades().subscribe(resultado => {
      this.propiedades = resultado.propiedades;
      console.log('nombre de propiedades: ' + this.propiedades);
    });
  }

  agregarCliente(){
    var cliente: any = {
      nombre : this.nombre,
      domicilio : this.domicilio,
      ciudad : this.ciudad,
      provincia : this.provincia,
      celular : this.celular,
      mail : this.mail,
      condicion : this.condicionCliente,
      idPropiedad : this.idPropiedad
    }
    this.clienteService.agregarCliente(cliente).subscribe(resultado => {
      console.log('cliente agregado con exito: ' + resultado.cliente);
    });

  }

}