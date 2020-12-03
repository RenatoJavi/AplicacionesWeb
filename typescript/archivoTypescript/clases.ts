// class Avenger {
//   nombre: string;
//   equipo: string;
//   nombreReal?: string;
//   puedePelar: boolean;
//   peleasGanadas?: string;

//   constructor(nombre: string, equipo: string, puedePelear: true) {
//     this.nombre = nombre;
//     this.equipo = equipo;
//     this.puedePelar = puedePelear;
//   }
// }

// const antman = new Avenger('roger', 'vengadores unidos', true);
// console.log(antman);

class Avenger {
  // nombre: string;
  // equipo: string;
  // nombreReal?: string;
  // puedePelar: boolean;
  // peleasGanadas?: string;

  constructor(
    public nombre: string,
    public equipo: string,
    public nombreReal: string,
    public puedePelar: boolean,
    public peleasGanadas?: number
  ) {}
}
//miObjeto = new MiClasePropiedades();
const antman = new Avenger('roger', 'avenger', 'sr roger', true, 3);
console.log(antman);

const miObjeto = new Avenger('ALCON', 'avenger', 'FALCON', true, 10);
console.log(miObjeto);
const miSegundoObjeto = new Avenger('vision', 'avenger', 'gema ', true, 1);
console.log(miSegundoObjeto);
console.log('Nombre del super heroe :', miSegundoObjeto.nombre);
