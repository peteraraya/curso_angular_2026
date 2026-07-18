/**
 * Interfaz que define un pasajero, el cual puede tener opcionalmente una lista de hijos.
 */
interface Passenger {
  name: string;
  children?: string[];
}

/**
 * Pasajero de ejemplo que contiene hijos.
 */
const passenger1: Passenger = { 
  name: 'John Doe',
  children: ['Jane Doe', 'Jack Doe'],
};

/**
 * Pasajero de ejemplo sin hijos.
 */
const passenger2: Passenger = {
  name: 'Alice Smith',
};

/**
 * Imprime la cantidad de hijos de un pasajero en consola.
 * Hace uso del encadenamiento opcional (optional chaining) para evitar errores si la propiedad no existe.
 * @param passenger Objeto que representa al pasajero.
 */
const printChildren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length ?? 0;
  console.log(`${passenger.name} has ${howManyChildren} children.`);
}

printChildren(passenger1);
printChildren(passenger2);
