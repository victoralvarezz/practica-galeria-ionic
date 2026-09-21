import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {

  // Aquí declaramos las variables
  public tituloSeccion: string = 'Mi Primera Galería';
  public rutaImagenLocal: string = 'assets/prueba1.jpg';

  constructor() {}

  ngOnInit() {}
}
