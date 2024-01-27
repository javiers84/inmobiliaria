import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})

export class PropiedadesComponent implements OnInit {

  propiedades: any;
  nuevoArrayTipo = [];
  nuevoArray = [];


  arrayCondicionLimpio: any;
  arrayTipoLimpio: any;
  arrayDormitoriosLimpio: any;
  arrayZonaLimpio: any;

  condicionOperacion: any;
  tipoPropiedad: any;
  cantDormitorios: any;
  zonaPropiedad: any;


  constructor(private inmueblesService: InmueblesService) {
      this.obtenerTodosProd();
   }

   obtenerTodosProd(){
    this.inmueblesService.obtenerPropiedades().subscribe(resultado => {
      this.propiedades = resultado.propiedades;
      console.log('propiedades disponibles: ' + JSON.stringify(this.propiedades));
    });
   }

   verDetalles(idProp: any){
    localStorage.setItem('idPropiedad', idProp);
   }

   removeDuplicates(arrayIn: any[]) {
    var arrayOut: any[] = [];
    arrayIn.forEach((item: { zone: any; })=> {
      try {
        if (JSON.stringify(arrayOut[arrayOut.length-1].zone) !== JSON.stringify(item.zone)) {
          arrayOut.push(item);
        }
      } catch(err) {
        arrayOut.push(item);
       }
    })
    return arrayOut;
}

   filtrarPorTipoOperacion() {
    this.condicionOperacion = document.getElementById("condicion");
    console.log('condicion de venta: ' + this.condicionOperacion.value);
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.tipoOperacion === this.condicionOperacion.value);
    console.log('elementos del nuevo array: ' + JSON.stringify(this.nuevoArrayTipo));

    // var sinDuplicado = this.removeDuplicates(this.nuevoArrayTipo);

    this.condicionOperacion = this.condicionOperacion.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorTipoPropiedad() {
    this.tipoPropiedad = document.getElementById("tipo");
    console.log('condicion de venta: ' + this.tipoPropiedad.value);
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.tipoUnidad === this.tipoPropiedad.value);
    console.log('elementos filtrados por tipo de propiedad: ' + JSON.stringify(this.nuevoArrayTipo));

    this.tipoPropiedad = this.tipoPropiedad.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorcantDormitorios() {
    this.cantDormitorios = document.getElementById("dormitorios");
    console.log('condicion de venta: ' + this.cantDormitorios.value);
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.dormitorios === this.cantDormitorios.value);
    console.log('elementos filtrados por cantidad dormitorios: ' + JSON.stringify(this.nuevoArrayTipo));

    this.cantDormitorios = this.cantDormitorios.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorZonaPropiedad() {
    this.zonaPropiedad = document.getElementById("zona");
    console.log('condicion de venta: ' + this.zonaPropiedad.value);
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.ciudad === this.zonaPropiedad.value);
    console.log('elementos filtrados por ubicacion de propiedad: ' + JSON.stringify(this.nuevoArrayTipo));

    this.zonaPropiedad = this.zonaPropiedad.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  limpiarFiltros() {
    this.obtenerTodosProd();

    this.condicionOperacion = "";
    this.tipoPropiedad = "";
    this.cantDormitorios = "";
    this.zonaPropiedad = "";
  }

  ngOnInit() {
  }

}