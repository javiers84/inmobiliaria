import { Component, OnInit } from '@angular/core';
import { SlidersService } from '../../servicios/sliders.service';

@Component({
  selector: 'app-listar-slider',
  templateUrl: './listar-slider.component.html',
  styleUrl: './listar-slider.component.css'
})
export class ListarSliderComponent implements OnInit {

  sliders: any;
  imagen: any;
  imagenSeleccionada: any;

  constructor(private sliderService: SlidersService) {
    this.obtenerImagen();
   }

  ngOnInit() {
  }

  obtenerImagen(){
    this.sliderService.obtenerSliders().subscribe(resultado => {
      this.sliders = resultado.sliders;
      this.imagenSeleccionada = this.sliders[0].imagen;
    });
  }

  mostrarImg(id: any){
    this.sliderService.obtenerSlider(id).subscribe(resultado => {
      this.imagenSeleccionada = resultado.sliders.imagen;
    });
  }

  eliminarImg(id: any){
    this.sliderService.eliminarSlider(id).subscribe(resultado => {
      this.obtenerImagen();
    })
  }

}