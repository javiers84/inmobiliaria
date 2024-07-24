import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { InmueblesService } from '../../servicios/inmuebles.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent implements OnInit {

  clientes: any;

  constructor(private clientesService: ClientesService,
              private inmueblesService: InmueblesService) {
    this.obtenerClientes();
   }

  ngOnInit() {
  }

  obtenerClientes(){
    this.clientesService.obtenerClientes().subscribe(resultado => {
      this.clientes = resultado.clientes;
    });
  }

  modificarCliente(idCliente: any){

    localStorage.setItem('idCliente', idCliente);
  }

  eliminarCliente(idCliente: any){
    this.clientesService.eliminarCliente(idCliente).subscribe(resultado => {
      this.obtenerClientes();
    });

    alert('Propiedad eliminada con exito!!');
  }

  verMas(idCliente: any){

    localStorage.setItem('idCliente', idCliente);
  }

}