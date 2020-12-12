import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private roter: Router) {}

  rutaHome = ['/home'];
  rutaAbout = ['/about'];
  rutaHeroes = ['/heroes'];
  rutaInfoHeroe = ['/infoHeroe/:id'];
  ngOnInit(): void {}

  buscarHeroe(termino: string): any {
    // aqui ya tenemos el termino a la mano
    this.roter.navigate(['/buscar', termino]);
  }
}
