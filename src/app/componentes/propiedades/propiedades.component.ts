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
  public page!: number;

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
    });
   }

   verDetalles(idProp: any){
    localStorage.setItem('idPropiedad', idProp);
   }

//    removeDuplicates(arrayIn: any[]) {
//     var arrayOut: any[] = [];
//     arrayIn.forEach((item: { mostrar: any; })=> {
//       try {
//         if (JSON.stringify(arrayOut[arrayOut.length-1].zone) !== JSON.stringify(item.mostrar)) {
//           arrayOut.push(item);
//         }
//       } catch(err) {
//         arrayOut.push(item);
//        }
//     })
//     return arrayOut;
// }

   filtrarPorTipoOperacion() {
    this.condicionOperacion = document.getElementById("condicion");
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.tipoOperacion === this.condicionOperacion.value);
    
    this.condicionOperacion = this.condicionOperacion.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorTipoPropiedad() {
    this.tipoPropiedad = document.getElementById("tipo");
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.tipoUnidad === this.tipoPropiedad.value);
    
    this.tipoPropiedad = this.tipoPropiedad.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorcantDormitorios() {
    this.cantDormitorios = document.getElementById("dormitorios");
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.dormitorios === this.cantDormitorios.value);
    
    this.cantDormitorios = this.cantDormitorios.value;
    this.propiedades = this.nuevoArrayTipo;

    return this.propiedades;

  }

  filtrarPorZonaPropiedad() {
    this.zonaPropiedad = document.getElementById("zona");
    this.nuevoArrayTipo = this.propiedades.filter((prop: any) => prop.ciudad === this.zonaPropiedad.value);
    
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