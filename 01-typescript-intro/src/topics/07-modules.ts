import { taxtCalculator, type Product } from "./06-function-destructuring";



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

const [ total, tax ] = taxtCalculator({ products: shoppingCart, tax: 0.15 });
console.log('Total:', total);
console.log('Tax:', tax);