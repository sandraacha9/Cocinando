import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ProductVO } from '../../../model/product/product-vo.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  @Input() products: ProductVO[];
  @Input() title?: string;

  constructor(private logger: NGXLogger) {}

  ngOnInit() {
    this.logger.trace('[ProductGridComponent] - ngOnInit');
  }

  emptyItems(itemsPerRow) {
    let count = 0;
    if (this.products) {
      if (this.products.length >= itemsPerRow) {
        const resto = this.products.length % itemsPerRow;
        count = itemsPerRow - resto !== itemsPerRow ? itemsPerRow - resto : 0;
      } else {
        count = itemsPerRow - this.products.length;
      }
    }

    return Array(count).fill(1);
  }
}
