const avenger = {
  nombre: 'Roger',
  clave: 'capitan america',
  poder: 'droga',
};

const extraer = ({ nombre, poder }: any) => {
  // let { nombre, clave, poder } = avenger;
  console.log(nombre);
  console.log(poder);
};

//extraer(avenger);

const avengers: string[] = ['thor', 'airoman', 'grood'];
//const [, , hulk] = avengers;

// console.log(thor);
// console.log(airoman);
// console.log(hulk);
const extraerheroe = ([thor, airoman, grood]: string[]) => {
  // let { nombre, clave, poder } = avenger;
  console.log(thor);
  console.log(airoman);
  console.log(grood);
};
extraerheroe(avengers);
