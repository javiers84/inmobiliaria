import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalleprop',
  templateUrl: './detalleprop.component.html',
  styleUrl: './detalleprop.component.css'
})
export class DetallepropComponent implements OnInit {
  // public safeSrc!: SafeResourceUrl;

  propiedades: any;

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
  antiguedad: any;
  estado: any;
  maps: any;
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

  constructor(private inmueblesService: InmueblesService, private id: String,
              private domSanitizer: DomSanitizer) {
    console.log('el id que llega al constructor es: ' + this.id);
    this.obtenerPropiedad(this.id);
  }

  obtenerPropiedad(identificador: any) {
    identificador = localStorage.getItem('idPropiedad');
    this.inmueblesService.obtenerPropiedad(identificador).subscribe(resultado => {
      this.propiedades = resultado.propiedad;

      if(resultado.propiedad.dormitorios != null){
        this.dormitorios = resultado.propiedad.dormitorios;
      }else{
        document.getElementById('dormitorios')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.banos != null){
        this.banos = resultado.propiedad.banos;
      }else{
        document.getElementById('banos')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.antiguedad != null){
        this.antiguedad = resultado.propiedad.antiguedad;
      }else{
        document.getElementById('antiguedad')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.metrosPropios != null){
        this.metrosPropios = resultado.propiedad.metrosPropios;
      }else{
        document.getElementById('mtsCubiertos')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.metrosTotales != null){
        this.metrosTotales = resultado.propiedad.metrosTotales;
      }else{
        document.getElementById('mtsTotales')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.estado != null){
        this.estado = resultado.propiedad.estado;
      }else{
        document.getElementById('estado')!.setAttribute("style", "display: none");
      }


      if(resultado.propiedad.agua === true){
        this.agua = "agua";
      }else{
        document.getElementById('agua')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.luz === true){
        this.luz = "luz";
      }else{
        document.getElementById('luz')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.gas === true){
        this.gas = "gas";
      }else{
        document.getElementById('gas')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.seguridad === true){
        this.seguridad = "seguridad";
      }else{
        document.getElementById('seguridad')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.porteria === true){
        this.porteria = "porteria";
      }else{
        document.getElementById('porteria')!.setAttribute("style", "display: none");
      }
      if(resultado.propiedad.cloacas === true){
        this.cloacas = "cloacas";
      }else{
        document.getElementById('cloacas')!.setAttribute("style", "display: none");
      }

      console.log('propiedad que retorna: ', this.propiedades);

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
      this.expensas = resultado.propiedad.expensas;
      this.mapa = resultado.propiedad.mapa;
      this.tipoMoneda = resultado.propiedad.tipoMoneda;
      this.precio = resultado.propiedad.precio;
      this.idPropietario = resultado.propiedad.idPropietario.nombre;
      this.agua = this.agua;
      this.luz = this.luz;
      this.gas = this.gas;
      this.seguridad = this.seguridad;
      this.porteria = this.porteria;
      this.cloacas = this.cloacas;
      this.imagenUno = resultado.propiedad.imagen1;
      this.imagenDos = resultado.propiedad.imagen2;
      this.imagenTres = resultado.propiedad.imagen3;
      this.imagenCuatro = resultado.propiedad.imagen4;
      this.imagenCinco = resultado.propiedad.imagen5;
    });
  }
  
  ngOnInit() {
    
  }

}