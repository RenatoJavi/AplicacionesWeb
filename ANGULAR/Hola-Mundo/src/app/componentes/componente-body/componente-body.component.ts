import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-body',
  templateUrl: './componente-body.component.html',
  styleUrls: ['./componente-body.component.css'],
})
export class ComponenteBodyComponent {
  constructor() {}

  frase: any = {
    mensaje: 'la perseverancia vence',
    autor: 'soldado descocnocido',
  };
  mostrar = true;

  personajes: string[] = [
    'Batman',
    'Wuason',
    'Mr frio',
    'Hiedra',
    'El Pinguino',
  ];
}
