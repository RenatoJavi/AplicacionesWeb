const sumar = (a: number, b: number): number => a + b;

const nombrw = (): string => 'hola';

const obterneSalrio = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('nico');
  });
};
obterneSalrio().then((argumento) => console.log(argumento.toUpperCase()));
