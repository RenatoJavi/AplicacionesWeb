import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {}; // La propiedad heroe PUEDE venir de afuera , YO QUIERO recivir el INPUT DESDE AFUERA

  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  // @Input() // el IMPUT me dice que una propiedad va a ser recibida desde afuera
  verHeroe(): any {
    // this.activarRouter.navigate(['/infoHeroe', this.indice]);
    this.router.navigate(['/infoHeroe', this.indice]); // emite el indice
  }
}
