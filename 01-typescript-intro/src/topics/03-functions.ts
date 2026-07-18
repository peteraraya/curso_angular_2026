/**
 * Suma dos números y retorna el resultado.
 * @param a Primer número.
 * @param b Segundo número.
 * @returns La suma de a y b.
 */
function addNumbers(a: number, b: number): number {
  return a + b;
}

/**
 * Función de flecha que suma dos números y retorna el resultado como string.
 */
const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

/**
 * Multiplica un número por una base.
 * @param firstNumber Primer número.
 * @param secondNumber Opcional. No se usa en la función actual.
 * @param base Número base, por defecto 2.
 * @returns El resultado de la multiplicación.
 */
function multiplyNumbers(firstNumber: number, secondNumber?: number, base:number = 2): number {
  return firstNumber  * base;
}

const result:number = addNumbers(2, 3);
const arrowResult:string = addNumbersArrow(2, 3);
const multiplyResult:number = multiplyNumbers(5);


console.log({ result, arrowResult, multiplyResult });

/**
 * Interfaz para definir un personaje con métodos y propiedades.
 */
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string | undefined;
  showHp?: () => void;
}

/**
 * Cura a un personaje aumentando sus puntos de vida.
 * @param character El personaje a curar.
 * @param amount Cantidad de puntos de vida a incrementar.
 */
const heal = (character: Character, amount: number): void => {
  character.hp += amount;
}

const strider = {
  name: 'Strider',
  hp: 100,
  skills: ['sword', 'bow', 'stealth'],
  hometown: 'Windfall',
  showHp: function() {
    console.log(`Puntos de vida es : ${this.hp}`);
  }
};
heal(strider, 50);
strider.showHp();

console.log({ strider });


export {
  addNumbers,
  heal,
  strider
};