(function () {
  //funciones flecha

  let miFincion = function (a: string) {
    return a;
  };

  const miFuncinioF = (a: string) => {
    return a.toUpperCase();
  };

  const sumar = (a: number, b: number) => a + b;

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
