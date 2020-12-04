import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-footer',
  templateUrl: './componente-footer.component.html',
  styleUrls: ['./componente-footer.component.css'],
})
export class ComponenteFooterComponent {
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }
}
