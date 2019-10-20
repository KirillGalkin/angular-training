import { Injectable } from '@angular/core';

import { ProductModel } from '../../products/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContent: Array<ProductModel> = [];

  buyProduct(product: ProductModel) {
    this.cartContent.push(product);
  }

  getCartContent() {
    return this.cartContent;
  }
}
