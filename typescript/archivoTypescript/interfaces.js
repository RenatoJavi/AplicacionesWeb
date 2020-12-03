"use strict";
const enviarMision = (xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la mision` + '  ARMA ' + `${xmen.arma}`);
};
const wolverin1 = {
    nombre: 'Logan',
    edad: 55,
    arma: 'garras',
};
enviarMision(wolverin1);
