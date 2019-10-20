import { Component, Input } from '@angular/core';

import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  onBuy() {
    this.cartService.buyProduct(this.product);
    console.log('Purchase done', this.cartService.getCartContent());
  }
}
