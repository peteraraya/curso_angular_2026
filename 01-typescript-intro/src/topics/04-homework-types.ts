/*
    ===== Código de TypeScript =====
*/

/**
 * Interfaz que define la estructura de una dirección.
 */
interface Address {
  street: string;
  country: string;
  city: string;
}

/**
 * Interfaz que define la estructura de un superhéroe.
 */
interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  /**
   * Muestra la dirección formateada.
   * @returns Un string con el nombre, ciudad y país.
   */
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  }
}

const address = superHeroe.showAddress();
console.log(address);

export { };