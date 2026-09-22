import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class GaleriaComponent implements OnInit {

  public tituloSeccion: string = 'Mi Primera Galería';
  public rutaImagenLocal: string = 'assets/prueba1.jpg';

  constructor() {}

  ngOnInit() {}
}
