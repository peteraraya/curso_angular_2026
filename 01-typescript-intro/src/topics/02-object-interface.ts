
const skills: string[] = ["TypeScript", "JavaScript", "HTML", "CSS"];

console.log({ skills });

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string | undefined;
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