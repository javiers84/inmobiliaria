import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { jsPDF } from 'jspdf';
import  html2canvas  from 'html2canvas';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent implements OnInit {

  propiedades: any;
  idProp: any;

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

  idUser: any;
  foto: any;
  nombre: any;
  telefono: any;
  mail: any;

  constructor(private inmueblesService: InmueblesService, private id: String,
              private idAgente: String, private domSanitizer: DomSanitizer, 
              public usuarioService: UsuariosService, private activedRoute: ActivatedRoute,
              private clipboard: Clipboard) {
      
      this.obtenerPropiedad(this.id);
      this.obtenerAgente(this.idAgente);
    }

    obtenerPropiedad(identificador: any) {
      identificador = this.activedRoute.snapshot.paramMap.get('id');
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
        this.maps = resultado.propiedad.mapa;
        this.tipoMoneda = resultado.propiedad.tipoMoneda;
        this.precio = resultado.propiedad.precio;
        this.idPropietario = resultado.propiedad.idPropietario.nombre;
        this.agua = this.agua;
        this.luz = this.luz;
        this.gas = this.gas;
        this.seguridad = this.seguridad;
        this.porteria = this.porteria;
        this.cloacas = this.cloacas;
        this.imagenUno = 'https://marinoinmobiliaria.onrender.com/'+resultado.propiedad.imagen1;
        this.imagenDos = 'https://marinoinmobiliaria.onrender.com/'+resultado.propiedad.imagen2;
        this.imagenTres = 'https://marinoinmobiliaria.onrender.com/'+resultado.propiedad.imagen3;
        this.imagenCuatro = 'https://marinoinmobiliaria.onrender.com/'+resultado.propiedad.imagen4;
        this.imagenCinco = 'https://marinoinmobiliaria.onrender.com/'+resultado.propiedad.imagen5;
      });
    }

    obtenerAgente(id: any){
      id = this.activedRoute.snapshot.paramMap.get('idAgente');
      this.usuarioService.obtenerUsuario(id).subscribe(resultado => {

        this.foto = 'https://marinoinmobiliaria.onrender.com/'+resultado.usuario.imagen;
        this.nombre = resultado.usuario.nombre;
        this.telefono = resultado.usuario.telefono;
        this.mail = resultado.usuario.mail;
      });
    }

    exportarPropiedad(){

      var elemento = document.getElementById('btnExpor');
      elemento!.style.display = "none";

      // Extraemos el
      const DATA = document.getElementById('leerPDF');
      const doc = new jsPDF('p', 'px', 'a4');

      html2canvas(DATA!).then((canvas: any) => {

      var img1 = canvas.toDataURL(this.imagenUno);
      var img2 = canvas.toDataURL(this.imagenDos+'/jpeg');
      var img3 = canvas.toDataURL(this.imagenTres+'/jpeg');
      var img4 = canvas.toDataURL(this.imagenCuatro+'/jpeg');
      var img5 = canvas.toDataURL(this.imagenCinco+'/jpeg');
      var imgAgente = canvas.toDataURL(this.foto);

    //   // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps1 = (doc as any).getImageProperties(img1);
      const imgProps2 = (doc as any).getImageProperties(img2);
      const imgProps3 = (doc as any).getImageProperties(img3);
      const imgProps4 = (doc as any).getImageProperties(img4);
      const imgProps5 = (doc as any).getImageProperties(img5);
      const imgPropAgente = (doc as any).getImageProperties(imgAgente);

      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;

      const pdfHeight1 = (imgProps1.height * pdfWidth) / imgProps1.width;
      const pdfHeight2 = (imgProps2.height * pdfWidth) / imgProps2.width;
      const pdfHeight3 = (imgProps3.height * pdfWidth) / imgProps3.width;
      const pdfHeight4 = (imgProps4.height * pdfWidth) / imgProps4.width;
      const pdfHeight5 = (imgProps5.height * pdfWidth) / imgProps5.width;

      doc.addImage(img1, 'JPEG', bufferX, bufferY, pdfWidth, pdfHeight1, undefined, 'FAST');
      doc.addImage(img2, 'JPEG', bufferX, bufferY, pdfWidth, pdfHeight2, undefined, 'FAST');
      doc.addImage(img3, 'JPEG', bufferX, bufferY, pdfWidth, pdfHeight3, undefined, 'FAST');
      doc.addImage(img4, 'JPEG', bufferX, bufferY, pdfWidth, pdfHeight4, undefined, 'FAST');
      doc.addImage(img5, 'JPEG', bufferX, bufferY, pdfWidth, pdfHeight5, undefined, 'FAST');
      doc.addImage(imgAgente, 'PNG', bufferX, bufferY, 35, 35, undefined, 'FAST');
      return doc;
    }).then((docResult: any) => {
      // docResult.save(`${new Date().toISOString()}_propiedad:${this.domicilio}.pdf`);
      docResult.save(`propiedad:${this.domicilio}.pdf`);
    });

    var elemento = document.getElementById('btnExpor');
    elemento!.style.display = "block";
  }

    copiar(){
      var url = window.location.href;
      this.clipboard.copy(url);
    }

  ngOnInit() {
  }

}