import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-listar-prop',
  templateUrl: './listar-prop.component.html',
  styleUrl: './listar-prop.component.css'
})
export class ListarPropComponent implements OnInit {

  propiedades: any;
  clientes: any;
  prop: any = [];
  idAgente: any;
  isChecked: any;


  zona: any;
  codigo: any;
  domicilio: any;
  country: any;
  manzana: any;
  lote: any;
  ciudad: any;
  provincia: any;
  tipoUnidad: any;
  tipoOperacion: any;
  descripcion: any;
  metrosPropios: any;
  metrosTotales: any;
  dormitorios: any;
  banos: any;
  expensas: any;
  mapa: any;
  tipoMoneda: any;
  precio: any;
  idPropietario: any;
  agua: any;
  luz: any;
  gas: any;
  seguridad: any;
  porteria: any;
  cloacas: any;

  imagenUno: any;
  imagenDos: any;
  imagenTres: any;
  imagenCuatro: any;
  imagenCinco: any;

  constructor(private inmueblesService: InmueblesService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.obtenerPropiedades();
  }

  ngOnInit() {
    this.idAgente = localStorage.getItem('id');
  }

  obtenerPropiedades() {
    this.inmueblesService.obtenerPropiedades().subscribe(resultado => {

      this.propiedades = resultado.propiedades;
    });
  }

  modificarPropiedad(idPropiedad: any) {

    localStorage.setItem('idPropiedad', idPropiedad);
  }

  eliminarPropiedad(idPropiedad: any) {

    this.dialog
      .open(DialogConfirmComponent, {
        data: `¿Desea eliminar la propiedad?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.inmueblesService.eliminarPropiedad(idPropiedad).subscribe(resultado => {
            alert('propiedad eliminada con exito')
            this.obtenerPropiedades();
          });
        } else {
          console.log('no se elimino la propiedad');
        }
      });
  }

  exportarPropiedad(idPropiedad: any) {

    localStorage.setItem('idPropExportar', idPropiedad);

    this.idAgente = localStorage.getItem('id');
    this.router.navigate(['/ficha', idPropiedad, this.idAgente]);
  }

  obtenerPropiedad(identificador: any){
    this.inmueblesService.obtenerPropiedad(identificador).subscribe(resultado => {
      // this.propiedades = resultado.propiedad;

      this.zona = resultado.propiedad.zona;
      this.codigo = resultado.propiedad.codigo;
      this.domicilio = resultado.propiedad.domicilio;
      this.country = resultado.propiedad.country;
      this.manzana = resultado.propiedad.manzana;
      this.lote = resultado.propiedad.lote;
      this.ciudad = resultado.propiedad.ciudad;
      this.provincia = resultado.propiedad.provincia;
      this.tipoUnidad = resultado.propiedad.tipoUnidad;
      this.tipoOperacion = resultado.propiedad.tipoOperacion;
      this.descripcion = resultado.propiedad.descripcion;
      this.metrosPropios = resultado.propiedad.metrosPropios;
      this.metrosTotales = resultado.propiedad.metrosTotales;
      this.dormitorios = resultado.propiedad.dormitorios;
      this.banos = resultado.propiedad.banos;
      this.expensas = resultado.propiedad.expensas;
      this.mapa = resultado.propiedad.mapa;
      this.tipoMoneda = resultado.propiedad.tipoMoneda;
      this.precio = resultado.propiedad.precio;
      this.agua = resultado.propiedad.agua;
      this.luz = resultado.propiedad.luz;
      this.gas = resultado.propiedad.gas;
      this.seguridad = resultado.propiedad.seguridad;
      this.porteria = resultado.propiedad.porteria;
      this.cloacas = resultado.propiedad.cloacas;
      this.imagenUno = resultado.propiedad.imagenSeleccionadaUno;
      this.imagenDos = resultado.propiedad.imagenSeleccionadaDos;
      this.imagenTres = resultado.propiedad.imagenSeleccionadaTres;
      this.imagenCuatro = resultado.propiedad.imagenSeleccionadaCuatro;
      this.imagenCinco = resultado.propiedad.imagenSeleccionadaCinco;
    });
  }

  mostrarUocultar(idProp: any){

    const input = document.getElementById('inputMostrar') as HTMLInputElement;
    console.log('valor del checkbox: ' + input.checked);

    this.obtenerPropiedad(idProp);

    if(input.checked){

      var datos: any = {
        zona: this.zona,
        codigo: this.codigo,
        domicilio: this.domicilio,
        country: this.country,
        manzana: this.manzana,
        lote: this.lote,
        ciudad: this.ciudad,
        provincia: this.provincia,
        tipoUnidad: this.tipoUnidad,
        operacion: this.tipoOperacion,
        descripcion: this.descripcion,
        metrosPropios: this.metrosPropios,
        metrosTotales: this.metrosTotales,
        dormitorios: this.dormitorios,
        banos: this.banos,
        expensas: this.expensas,
        mapa: this.mapa,
        tipoMoneda: this.tipoMoneda,
        precio: this.precio,
        idPropietario: this.idPropietario,
        agua: this.agua,
        luz: this.luz,
        gas: this.gas,
        seguridad: this.seguridad,
        porteria: this.porteria,
        cloacas: this.cloacas,
        imagen1: this.imagenUno,
        imagen2: this.imagenDos,
        imagen3: this.imagenTres,
        imagen4: this.imagenCuatro,
        imagen5: this.imagenCinco,
        mostrar: false
      }

      console.log('valor del dato: ' + JSON.stringify(datos));
      console.log('id de la propiedad a mostrar: ', idProp);

      this.inmueblesService.modificarPropiedad(idProp, datos).subscribe(resultado => {
        console.log('pasamos por el modif del mostrar: true');
        console.log('resultado: ' + resultado);
        console.log('datos check: ', datos);
      });
    }else{
      var datos: any = {
        zona: this.zona,
        codigo: this.codigo,
        domicilio: this.domicilio,
        country: this.country,
        manzana: this.manzana,
        lote: this.lote,
        ciudad: this.ciudad,
        provincia: this.provincia,
        tipoUnidad: this.tipoUnidad,
        operacion: this.tipoOperacion,
        descripcion: this.descripcion,
        metrosPropios: this.metrosPropios,
        metrosTotales: this.metrosTotales,
        dormitorios: this.dormitorios,
        banos: this.banos,
        expensas: this.expensas,
        mapa: this.mapa,
        tipoMoneda: this.tipoMoneda,
        precio: this.precio,
        idPropietario: this.idPropietario,
        agua: this.agua,
        luz: this.luz,
        gas: this.gas,
        seguridad: this.seguridad,
        porteria: this.porteria,
        cloacas: this.cloacas,
        imagen1: this.imagenUno,
        imagen2: this.imagenDos,
        imagen3: this.imagenTres,
        imagen4: this.imagenCuatro,
        imagen5: this.imagenCinco,
        mostrar: true
      }

      console.log('valor del dato: ' + JSON.stringify(datos));
      console.log('id de la propiedad a mostrar: ', idProp);

      this.inmueblesService.modificarPropiedad(idProp, datos).subscribe(resultado => {
        console.log('pasamos por el modif del mostrar: true');
        console.log('resultado: ' + resultado);
        console.log('datos check: ', datos);
      });
    }
  }

}