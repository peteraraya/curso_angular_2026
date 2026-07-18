/**
 * Demostración de tipos básicos en TypeScript.
 */

const name:string = 'Pedro';
// Puede ser un número o el string literal 'FULL'
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;


hpPoints = 'FULL';

console.log({ name, hpPoints, isAlive });


export { name , hpPoints, isAlive };