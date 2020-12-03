function imprimiconsola(contructoClase: Function) {
  console.log(contructoClase);
}

@imprimiconsola
export class Xmen {
  constructor(public nombre: string, public clave: string) {}

  imprimir() {
    `${this.nombre}- ${this.clave}`;
  }
}
