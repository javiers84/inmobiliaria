import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { SlidersService } from '../../servicios/sliders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{

  propiedades: Array<any> = [];

  as1: Array<any> = [];
  propiedad: Array<any> = [];

  zona: any;
  codigo: any;
  tipoUnidad: any;
  tipoOperacion: any;
  tipoMoneda: any;
  precio: any;
  descripcion: any;

  sliders: any;

  constructor(private inmueblesService: InmueblesService, private router: Router,
              private sliderService: SlidersService) {
    this.obtenerRecientes();
    this.obtenerSliders();
  }

  obtenerRecientes(){
    this.inmueblesService.obtenerPropiedades().subscribe((resultado: { propiedades: any[]; }) => {
      
      this.as1 = resultado.propiedades;

      var inicio = this.as1.length - 3;

      for (var key = inicio; key < this.as1.length; key++) {
        this.propiedad = this.as1[key];
        console.log('ultimas propiedades con i=' + key + " " + JSON.stringify(this.propiedad));
        var as: Array<any> = [];
        this.propiedades = this.propiedades.concat(this.propiedad);
      }
    });
  }

  obtenerSliders(){
    this.sliderService.obtenerSliders().subscribe((resultado: { sliders: any; }) => {
      this.sliders = resultado.sliders;
    });
  }

  verDetalles(idProp: any){
    localStorage.setItem('idPropiedad', idProp);
   }

  ngOnInit() {

  }
}