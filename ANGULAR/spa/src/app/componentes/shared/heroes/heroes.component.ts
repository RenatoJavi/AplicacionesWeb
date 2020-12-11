import {
  HeroesService,
  HeroesTipado,
} from './../../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroesTipado[] = [];
  constructor(
    private heroesServicio: HeroesService,
    private readonly routerNavegacion: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this.heroesServicio.getHeroes();
    console.log('Ver atributos de heroes: ', this.heroes);
  }

  verHeroe(indice: number): any {
    this.routerNavegacion.navigate(['/infoHeroe', indice]);
  }
}
