const enviarMision = (xmen: Xmen) => {
  console.log(
    `Enviando a ${xmen.nombre} a la mision` + '  ARMA ' + `${xmen.arma}`
  );
};

const wolverin1: Xmen = {
  nombre: 'Logan',
  edad: 55,
  arma: 'garras',
};

enviarMision(wolverin1);

interface Xmen {
  //tipado de objeto que cumpla esta interfaz
  nombre: string;
  edad: number;
  arma: string;
  poder?: string;
}
