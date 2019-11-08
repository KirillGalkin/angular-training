import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  onBuy(product) {
    this.buy.emit(product);
  }
}
