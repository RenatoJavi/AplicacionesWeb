const retirarDinero = (montoRetirar: number): Promise<number> => {
  let dineroActual = 1000;
  return new Promise((resolve, reject) => {
    if (montoRetirar > dineroActual) {
      reject('no hay fondos');
    } else {
      dineroActual = dineroActual - montoRetirar;
      resolve(dineroActual);
    }
  });
};

retirarDinero(500)
  .then((saldo) => console.log(`saldo ${saldo}`))
  .catch((error) => console.warn(error));
