(() => {
  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  const edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad,
  };

  // Cree una interfaz que sirva para validar el siguiente objeto
  var batman = (heroe: Heroe) => {
    (heroe.nombre = 'Bruno Díaz'),
      (heroe.artesMarciales = ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']);
  };

  interface Heroe {
    nombre: string;
    artesMarciales: string[];
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = (a: number, b: number): number => {
    return (a + b) * 2;
  };

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger(nombre: string, poder?: string, arma = 'arco') {
    let mensaje;
    if (poder) {
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    } else {
      mensaje = nombre + ' tiene un ' + poder;
    }
  }

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {
    constructor(public base: number, public altura: number) {}
    calcularArea = (): number => this.base * this.altura; //metodo con flecha

    area() {
      return this.base * this.altura;
    }
  }
  const objGeometrico = new Rectangulo(9, 5);

  console.log('area del rectangulo: ', objGeometrico.area());
  console.log('area calculada: ', objGeometrico.calcularArea());
})();
