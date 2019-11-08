import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  products = this.productsService.getProducts();

  handlePurchase(product) {
    this.cartService.buyProduct(product);
    console.log('Purchase done', this.cartService.getCartContent());
  }
}
