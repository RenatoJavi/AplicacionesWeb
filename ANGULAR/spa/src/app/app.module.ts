import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/shared/home/home.component';
import { HeroesComponent } from './componentes/shared/heroes/heroes.component';
import { AboutComponent } from './componentes/shared/about/about.component';
import { HeroesService } from './servicios/heroes.service';
import { ConsultasService } from './servicios/consultas.service';
import { InfoHeroeComponent } from './componentes/shared/info-heroe/info-heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    InfoHeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
