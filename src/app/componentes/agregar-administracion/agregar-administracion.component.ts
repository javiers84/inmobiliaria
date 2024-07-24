import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-administracion',
  templateUrl: './agregar-administracion.component.html',
  styleUrl: './agregar-administracion.component.css'
})
export class AgregarAdministracionComponent implements OnInit {

  inicioContrato: any;
  finContrato: any;
  precioInicial: any;
  ajuste: any;
  porcentajeAjuste: any;
  porcentajeHonorarios: any;
  montoHonorarios: any;
  expensas: any;
  cisi: any;
  sat: any;
  edet: any;
  gasnor: any;
  idPropietario: any;
  idInquilino: any;

  constructor() { }

  agregarAdministracion(){
    
  }

  ngOnInit() {
  }

}