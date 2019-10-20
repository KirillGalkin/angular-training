import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productsList: Array<ProductModel> = [
    { name: 'Neapolitan pizza slice', price: '2$', description: 'usual product', discount: '15%' },
    { name: 'Lazio pizza slice', price: '3$', description: 'usual product', discount: '20%' },
    { name: 'American pizza slice', price: '1$', description: 'usual product', discount: '20%' },
    { name: 'Vegetarian pizza slice', price: '4$', description: 'usual product', discount: '20%' },
    { name: 'Custom pizza slice', price: '2$', description: 'usual product', discount: '10%' },
    { name: 'Margherita pizza slice', price: '3$', description: 'usual product', discount: '20%' },
  ];

  getProducts() {
    return this.productsList;
  }
}
