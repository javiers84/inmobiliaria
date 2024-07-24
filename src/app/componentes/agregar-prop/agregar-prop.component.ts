import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../../servicios/inmuebles.service';
import { ClientesService } from '../../servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-prop',
  templateUrl: './agregar-prop.component.html',
  styleUrl: './agregar-prop.component.css'
})
export class AgregarPropComponent implements OnInit {

  propietarios: any;
  ultimoIdProp: any;

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
  mostrar: boolean = true;

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

  constructor(private inmueblesService: InmueblesService, 
              private clienteService: ClientesService,
              private router: Router
              ) {
                this.filtrarPorPropietario();
                this.ultimoDatoJson();
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

  ultimoDatoJson(){
    this.inmueblesService.obtenerPropiedades().subscribe(resultado => {
      var datos = resultado.propiedades;

      var as = <number> datos[datos.length-1].codigo;
      as++;

      var b = as.toString().padStart(5, '0');

      this.ultimoIdProp = b;
    });
  }

  agregarPropiedad() {

    var propiedad: any = {
      zona: this.zona,
      codigo: this.ultimoIdProp,
      domicilio: this.domicilio,
      country: this.country,
      manzana: this.manzana,
      lote: this.lote,
      ciudad: this.ciudad,
      provincia: this.provincia,
      tipoUnidad: this.tipoUnidad,
      tipoOperacion: this.tipoOperacion,
      descripcion: this.descripcion,
      metrosPropios: this.metrosPropios,
      metrosTotales: this.metrosTotales,
      dormitorios: this.dormitorios,
      banos: this.banos,
      expensas: this.expensas,
      antiguedad: this.antiguedad,
      estado: this.estado,
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
      mostrar: this.mostrar,
      imagen1: this.imagenUno,
      imagen2: this.imagenDos,
      imagen3: this.imagenTres,
      imagen4: this.imagenCuatro,
      imagen5: this.imagenCinco
    };

    this.inmueblesService.agregarPropiedad(propiedad).subscribe(resultado => {
      alert('Propiedad agregada exitosamente');
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
    this.antiguedad = "";
    this.estado = "";
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

    this.router.navigate(['/dashboard/listar-prop'])
  }

  onSubmit(f: any) {
    console.log(f.value);
}

  filtrarPorPropietario(){
    this.clienteService.obtenerClientes().subscribe(resultado => {
      this.propietarios = resultado.clientes;
    });
  }

  ngOnInit() {
  }

}