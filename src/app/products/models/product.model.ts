import { Product } from '../interfaces/product';

// Обычно так описывают модель
export class ProductModel implements Product {
  // name: string;
  // price: string;
  // description: string;
  // discount?: string;
  constructor(
    public name: string,
    public price: string,
    public description: string,
    public discount?: string
  ) {
    // this.name = name;
    // this.price = price;
    // this.description = description;
    this.discount = discount || null;
  }
}
