
export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'iPhone 14',
  price: 1200,
}

const tablet: Product = {
  description: 'iPad Air',
  price: 800,
}


interface TaxOptions {
  tax: number;
  products: Product[];
}


export const taxtCalculator = (options: TaxOptions): [number, number] => {
  const { tax, products } = options;
  let total: number = 0;

  products.forEach(({ price }) => {
    total += price ;
  });
  return [total, total * tax];
}

const shooppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, totalTax] = taxtCalculator({ products: shooppingCart, tax });
console.log('Total:', total);
console.log('Total Tax:', totalTax);







export { };