import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ComponenteHeaderComponent } from './componentes/componente-header/componente-header.component';
import { ComponenteBodyComponent } from './componentes/componente-body/componente-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHeaderComponent,
    HeaderComponent,
    ComponenteBodyComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
