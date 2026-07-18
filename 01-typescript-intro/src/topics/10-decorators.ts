
/**
 * Decorador de clase que añade nuevas propiedades a la clase extendida.
 * @param constructor Constructor de la clase original.
 * @returns Una nueva clase que extiende la original con nuevas propiedades.
 */
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

/**
 * Clase de ejemplo para probar el decorador.
 */
@classDecorator
class SuperClass {
  
  public myProperty: string = 'Hello World';

  /**
   * Imprime un mensaje por consola.
   */
  print() {
    console.log('Hola mundo');
  }
}

export { SuperClass };


console.log('-----------------');
const myClass = new SuperClass();
console.log(myClass);
myClass.print();