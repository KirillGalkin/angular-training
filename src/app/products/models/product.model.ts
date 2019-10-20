import { Product } from '../interfaces/product';

export class ProductModel implements Product {
    name: string;
    price: string;
    description: string;
    discount?: string;
    constructor(
        name: string,
        price: string,
        description: string,
        discount?: string
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.discount = discount || null;
    }
}
