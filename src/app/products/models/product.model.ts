import { Product } from '../interfaces/product';

export class ProductModel implements Product {
    constructor(
        public name: string,
        public price: string,
        public description: string,
        public discount?: string
    ) {
        this.discount = discount || null;
    }
}
