/**
 * Clase que representa a una persona con atributos básicos.
 */
export class Person {
    public name: string;
    public age: number;
    private address: string;
    
    /**
     * @param name Nombre de la persona.
     * @param age Edad de la persona.
     * @param address Dirección de la persona (opcional).
     */
    constructor(
      name: string, 
      age: number, 
      address: string = 'No address provided'
    ){
        this.name = name;
        this.age = age;
        this.address = address;
    }

}

const ironman = new Person('Tony Stark', 45, 'Malibu, California');

console.log(ironman.name);
console.log(ironman.age);

/**
 * Clase que representa a un superhéroe, extendiendo las características de una Persona.
 */
export class Hero extends Person {
    public alterEgo: string;
    public realName: string;
    public age: number;
    private power: string;

    /**
     * @param alterEgo Identidad heroica.
     * @param realName Nombre real del héroe.
     * @param age Edad del héroe.
     * @param power Poder principal del héroe.
     */
    constructor(
        alterEgo: string,
        realName: string,
        age: number,
        power: string
    ){
        super(realName, age);
        this.alterEgo = alterEgo;
        this.realName = realName;
        this.age = age;
        this.power = power;
    }
}

console.log('-----------------');
const spiderman = new Hero('Spiderman', 'Peter Parker', 21, 'Super agility');
console.log(spiderman);
console.log('-----------------');
console.log(spiderman.alterEgo);

/**
 * Clase que representa a un superhéroe usando composición en lugar de herencia.
 */
export class Hero2  {
    public alterEgo: string;
    public realName: string;
    public person: Person;

    /**
     * @param alterEgo Identidad heroica.
     * @param realName Nombre real del héroe.
     * @param person Instancia de Person que contiene los datos base.
     */
    constructor(
        alterEgo: string,
        realName: string,
        person: Person
    ) {
        this.alterEgo = alterEgo;
        this.realName = realName;
        this.person = person;
    }
}

console.log('-----------------');
const person = new Person('Peter araya', 21, 'New York');
const spiderman2 = new Hero2('Spiderman', 'Peter Parker',person);
console.log(spiderman2);
console.log('-----------------');
