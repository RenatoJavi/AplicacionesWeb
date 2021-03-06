import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
  styleUrls: ['./info-heroe.component.css'],
})
export class InfoHeroeComponent {
  heroe: any = {}; // va hacer un objeto, esta es la variable local que la voy a usar en el template

  constructor(
    private activarRouter: ActivatedRoute,
    private heroesServicio: HeroesService // ) {
  ) {
    this.activarRouter.params.subscribe(
      (parametro) => (this.heroe = heroesServicio.getHeroe(parametro['id']))
    );
  }
}
