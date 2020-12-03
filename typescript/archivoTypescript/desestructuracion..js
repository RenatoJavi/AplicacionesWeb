"use strict";
const avenger = {
    nombre: 'Roger',
    clave: 'capitan america',
    poder: 'droga',
};
const extraer = ({ nombre, poder }) => {
    // let { nombre, clave, poder } = avenger;
    console.log(nombre);
    console.log(poder);
};
//extraer(avenger);
const avengers = ['thor', 'airoman', 'grood'];
//const [, , hulk] = avengers;
// console.log(thor);
// console.log(airoman);
// console.log(hulk);
const extraerheroe = ([thor, airoman, grood]) => {
    // let { nombre, clave, poder } = avenger;
    console.log(thor);
    console.log(airoman);
    console.log(grood);
};
extraerheroe(avengers);
