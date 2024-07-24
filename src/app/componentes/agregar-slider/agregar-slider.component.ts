import { Component, OnInit } from '@angular/core';
import { SlidersService } from '../../servicios/sliders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-slider',
  templateUrl: './agregar-slider.component.html',
  styleUrl: './agregar-slider.component.css'
})
export class AgregarSliderComponent implements OnInit {

  imagen: any;
  imagenSeleccionada: any;

  constructor(
    private sliderService: SlidersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagen = (<string>reader.result).split(',')[1];
        this.imagenSeleccionada = (<string>reader.result).split(',')[1];
      }
    }
  }

  clearFile() {

    this.imagenSeleccionada = "";
  }

  guardarSlider() {
    var slider: any = {
      imagen: this.imagen
    }
    this.sliderService.agregarSlider(slider).subscribe((resultado: any) => {
      alert('Slider agregado correctamente');
      var result = resultado;
    });
    this.imagen = "";
    this.imagenSeleccionada = "";
    this.clearFile();

    this.router.navigate(['/dashboard/listar-sliders']);
  }

}