import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmueblesService } from '../../servicios/inmuebles.service';

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

  constructor(private inmueblesService: InmueblesService,
              private router: Router
    ) {
                this.obtenerPropiedades();
               }

  ngOnInit() {
    this.idAgente = localStorage.getItem('id');
  }

  obtenerPropiedades(){
    this.inmueblesService.obtenerPropiedades().subscribe(resultado => {
      console.log('todas las propiedades' + JSON.stringify(resultado.propiedades));
      
      this.propiedades = resultado.propiedades;
    });
  }

  modificarPropiedad(idPropiedad: any){
    console.log('pasamos por modificar propiedad');

    localStorage.setItem('idPropiedad', idPropiedad);

    // this.router.navigate(['/dashboard/modificar-prop']);
  }

  eliminarPropiedad(idPropiedad: any){
    console.log('pasamos por eliminar propiedad');

    

    this.inmueblesService.eliminarPropiedad(idPropiedad).subscribe(resultado => {
      this.obtenerPropiedades();
    });

    alert('Propiedad eliminada con exito!!');
  }

  exportarPropiedad(idPropiedad: any){
    console.log('pasamos por exportar propiedad' + idPropiedad);
    
    localStorage.setItem('idPropExportar', idPropiedad);
    
    this.idAgente = localStorage.getItem('id');
    console.log('id del usuario que crea ficha' + this.idAgente);
    this.router.navigate(['/ficha', idPropiedad, this.idAgente]);
  }

}