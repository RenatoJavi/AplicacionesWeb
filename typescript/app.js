var sumar = function (a, b) { return a + b; };
var nombrw = function () { return 'hola'; };
var obterneSalrio = function () {
    return new Promise(function (resolve, reject) {
        resolve('nico');
    });
};
obterneSalrio().then(function (argumento) { return console.log(argumento.toUpperCase()); });
