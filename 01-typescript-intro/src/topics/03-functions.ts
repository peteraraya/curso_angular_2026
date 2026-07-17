
function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiplyNumbers(firstNumber: number, secondNumber?: number, base:number = 2): number {
  return firstNumber  * base;
}

const result:number = addNumbers(2, 3);
const arrowResult:string = addNumbersArrow(2, 3);
const multiplyResult:number = multiplyNumbers(5);


console.log({ result, arrowResult, multiplyResult });

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string | undefined;
  showHp?: () => void;
}


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
