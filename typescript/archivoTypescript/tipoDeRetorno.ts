const suma = (a: number, b: number): number => a + b;

const nombre = (): string => 'hola';

const obterneSalario = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('nico');
  });
};
obterneSalrio().then((argumento) => console.log(argumento.toUpperCase()));
