(function () {
  let nombre: string = 'Xavier';
  let edad = 33;
  let apellido: string = 'Salazar';

  function getEdad() {
    return 100;
  }
  //let salida = nombre + ' ' + apellido + ' ' + edad.toString();
  let salida = `${nombre}` + '  \n' + `${apellido}` + ' \n' + `${getEdad()}`;

  console.log(salida);
})();
