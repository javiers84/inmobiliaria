import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-modificar-prop',
  templateUrl: './modificar-prop.component.html',
  styleUrl: './modificar-prop.component.css'
})
export class ModificarPropComponent implements OnInit{

  propiedades: any;
  identificador: any;
  propietarios: any;

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
  imagenSeleccionadaUno: any;
  imagenDos: any;
  imagenSeleccionadaDos: any;
  imagenTres: any;
  imagenSeleccionadaTres: any;
  imagenCuatro: any;
  imagenSeleccionadaCuatro: any;
  imagenCinco: any;
  imagenSeleccionadaCinco: any;

  constructor(
    private inmuebleService: InmueblesService,
    private clienteService: ClientesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
        this.filtrarPorPropietario();
        this.obtenerPropiedad();
      }

checkOnoCheck(){
  const input = document.getElementById("inputBPoC") as HTMLInputElement;
  if(input.checked){
    const inputMza = document.getElementById("manzana") as HTMLInputElement;
    inputMza.disabled = false;
    const inputLote = document.getElementById("lote") as HTMLInputElement;
    inputLote.disabled = false;
  }else{
    const inputMza = document.getElementById("manzana") as HTMLInputElement;
    inputMza.disabled = true;
    const inputLote = document.getElementById("lote") as HTMLInputElement;
    inputLote.disabled = true;
  }
}

  onFileChange1(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagenUno = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionadaUno = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile1() {
    this.imagenSeleccionadaUno = "";

  }

  onFileChange2(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagenDos = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionadaDos = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile2() {
    this.imagenSeleccionadaDos = "";

  }

  onFileChange3(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagenTres = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionadaTres = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile3() {
    this.imagenSeleccionadaTres = "";

  }

  onFileChange4(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagenCuatro = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionadaCuatro = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile4() {
    this.imagenSeleccionadaCuatro = "";

  }

  onFileChange5(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagenCinco = (<string>reader.result).split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log((<string>reader.result).split(',')[1]);
        this.imagenSeleccionadaCinco = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile5() {
    this.imagenSeleccionadaCinco = "";

  }

  obtenerPropiedad(){
    this.identificador = localStorage.getItem('idPropiedad');

    this.inmuebleService.obtenerPropiedad(this.identificador).subscribe(resultado => {
      this.propiedades = resultado.propiedad;

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
      // this.clienteService.obtenerClientes().subscribe(resultado => {
      //   this.propietarios = resultado.cliente;
      // });
      // this.idPropietario = resultado.propiedad.idPropietario.nombre;
      this.agua = resultado.propiedad.agua;
      this.luz = resultado.propiedad.luz;
      this.gas = resultado.propiedad.gas;
      this.seguridad = resultado.propiedad.seguridad;
      this.porteria = resultado.propiedad.porteria;
      this.cloacas = resultado.propiedad.cloacas;
      this.imagenSeleccionadaUno = resultado.propiedad.imagenSeleccionadaUno;
      this.imagenSeleccionadaDos = resultado.propiedad.imagenSeleccionadaDos;
      this.imagenSeleccionadaTres = resultado.propiedad.imagenSeleccionadaTres;
      this.imagenSeleccionadaCuatro = resultado.propiedad.imagenSeleccionadaCuatro;
      this.imagenSeleccionadaCinco = resultado.propiedad.imagenSeleccionadaCinco;
    });
  }

  filtrarPorPropietario(){
    this.clienteService.obtenerClientes().subscribe(resultado => {
      this.propietarios = resultado.clientes;
    });
  }

  actualizarPropiedad(){
    this.identificador = localStorage.getItem('idPropiedad');

    var formulario: any = {
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

    var datos = JSON.stringify(formulario);

    this.inmuebleService.modificarPropiedad(this.identificador, formulario).subscribe(resultado => {
      alert('Producto modificado con exito!!');
    });

    this.zona = "";
    this.codigo = "";
    this.domicilio = "";
    this.country = "";
    this.manzana = "";
    this.lote = "";
    this.ciudad = "";
    this.provincia = "";
    this.tipoUnidad = "";
    this.tipoOperacion = "";
    this.descripcion = "";
    this.metrosPropios = "";
    this.metrosTotales ="";
    this.dormitorios = "";
    this.banos = "";
    this.expensas = "";
    this.mapa = "";
    this.tipoMoneda = "",
    this.precio = "";
    this.idPropietario = "";
    this.agua = "";
    this.luz = "";
    this.gas = "";
    this.seguridad = "";
    this.porteria = "";
    this.cloacas = "";
    this.imagenSeleccionadaUno = "";
    this.imagenSeleccionadaDos = "";
    this.imagenSeleccionadaTres = "";
    this.imagenSeleccionadaCuatro = "";
    this.imagenSeleccionadaCinco = "";

    localStorage.removeItem('idPropiedad');

    this.router.navigate(['/dashboard/listar-prop']);
  }

  ngOnInit() {
  }

}