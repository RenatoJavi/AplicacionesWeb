"use strict";
const suma = (a, b) => a + b;
const nombre = () => 'hola';
const obterneSalario = () => {
    return new Promise((resolve, reject) => {
        resolve('nico');
    });
};
obterneSalrio().then((argumento) => console.log(argumento.toUpperCase()));
