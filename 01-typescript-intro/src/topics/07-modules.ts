import { taxtCalculator, type Product } from "./06-function-destructuring";

/**
 * Lista de productos en el carrito de compras.
 */
const shoppingCart : Product[] = [
  {
    description: 'iPhone 14',
    price: 1200
  },
  {
    description: 'iPad Air',
    price: 800
  }
];

// Calcula el total y el impuesto utilizando la función exportada desde otro módulo
const [ total, tax ] = taxtCalculator({ products: shoppingCart, tax: 0.15 });

console.log('Total:', total);
console.log('Tax:', tax);