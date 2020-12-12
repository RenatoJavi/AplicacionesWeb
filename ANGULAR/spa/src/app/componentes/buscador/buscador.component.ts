import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private activarRouter: ActivatedRoute,
    private servicioHeroes: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activarRouter.params.subscribe((params) => {
      const newTermino = 'termino';
      this.termino = params[newTermino];
      this.heroes = this.servicioHeroes.buscarHeroes(params[newTermino]);
      console.log(this.heroes);
    });
  }
  verHeroe(index: number): void {
    this.router.navigate(['/infoHero', index]); // ruta a donde me quiero ir
  }
}
