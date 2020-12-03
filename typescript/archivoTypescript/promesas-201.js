var retirarDinero = function (montoRetirar) {
    var dineroActual = 1000;
    return new Promise(function (resolve, reject) {
        if (montoRetirar > dineroActual) {
            reject('no hay fondos');
        }
        else {
            dineroActual = dineroActual - montoRetirar;
            resolve(dineroActual);
        }
    });
};
retirarDinero(500)
    .then(function (saldo) { return console.log("saldo " + saldo); })["catch"](function (error) { return console.warn(error); });
