"use strict";
const sumar = (a, b) => a + b;
const nombrw = () => 'hola';
const obterneSalrio = () => {
    return new Promise((resolve, reject) => {
        resolve('nico');
    });
};
obterneSalrio().then((argumento) => console.log(argumento.toUpperCase()));
