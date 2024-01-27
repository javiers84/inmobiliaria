import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  propiedades: any;

  constructor(private inmueblesService: InmueblesService) { 
    this.obtenerPropiedades();
  }

  obtenerPropiedades() {
    this.inmueblesService.obtenerPropiedades().subscribe(resultado => {
      this.propiedades = resultado.propiedades;
    });
  }

  eliminarPropiedades(identificador: any) {
    console.log('evento eliminar propiedades');
    console.log(identificador);

    this.inmueblesService.eliminarPropiedad(identificador).subscribe(resultado => {
      this.obtenerPropiedades();
    });
  }

  modificarPropiedades(identificador: any) {
    console.log('evento modificar propiedad', identificador);
  }

  ngOnInit() {
  }

}