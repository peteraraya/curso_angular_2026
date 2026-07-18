/**
 * Función genérica que devuelve el mismo argumento que recibe.
 * Permite definir el tipo de dato al momento de invocarla.
 * 
 * @param argument El valor a retornar. Puede ser de cualquier tipo (T).
 * @returns Retorna exactamente el mismo valor que se le pasó como argumento.
 */
export function whatsMyuType<T>(argument: T): T {
    return argument;
}


const amy = whatsMyuType<string>('Hola Mundo');
const amynumber = whatsMyuType<number>(100);
const amyarray = whatsMyuType<number[]>([1, 2, 3, 4, 5]);
const amyobject = whatsMyuType<{ name: string; age: number }>({ name: 'Pedro', age: 30 });

console.log({ amy, amynumber, amyarray, amyobject });



/**
 * Tratar de no usar any
 * 
 */
