/**
 * Demostración de arreglos e interfaces en TypeScript.
 */

const skills: string[] = ["TypeScript", "JavaScript", "HTML", "CSS"];

console.log({ skills });

/**
 * Interfaz para definir la estructura de un personaje.
 */
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string | undefined; // Propiedad opcional
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['sword', 'bow', 'stealth'],
  hometown: 'Windfall'
};  

strider.hometown = 'Rivendell';

console.log(strider)

export {
  skills,
  strider
}