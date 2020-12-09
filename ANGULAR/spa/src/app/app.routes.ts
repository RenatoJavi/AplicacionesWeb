import { Component } from '@angular/core';
import { HomeComponent } from './componentes/shared/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/shared/about/about.component';
import { HeroesComponent } from './componentes/shared/heroes/heroes.component';
import { InfoHeroeComponent } from './componentes/shared/info-heroe/info-heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'infoHeroe/:id', component: InfoHeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
