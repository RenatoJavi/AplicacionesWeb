"use strict";
(function () {
    //funciones flecha
    let miFincion = function (a) {
        return a;
    };
    const miFuncinioF = (a) => {
        return a.toUpperCase();
    };
    const sumar = (a, b) => a + b;
    console.log(sumar(5, 9));
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre}smask!!!`);
            }, 1000);
        },
    };
    hulk.smash();
})();
