import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private activarRouter: ActivatedRoute,
    private servicioHeroes: HeroesService
  ) {}

  ngOnInit(): void {
    this.activarRouter.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.servicioHeroes.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
}
