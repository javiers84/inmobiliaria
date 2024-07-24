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

    this.inmueblesService.eliminarPropiedad(identificador).subscribe(resultado => {
      this.obtenerPropiedades();
    });
  }

  modificarPropiedades(identificador: any) {
  }

  ngOnInit() {
  }

}