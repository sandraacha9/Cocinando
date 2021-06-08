import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrderItemVO } from '../../../../model/order/order-item/order-item-vo.model';
import { OrderCartService } from './../../../../core/services/order-cart/order-cart.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() orderItem: OrderItemVO;
  isGift: boolean;

  private disabledActions: Boolean;

  constructor(
    private translate: TranslateService,
    private orderCartService: OrderCartService
  ) { }

  ngOnInit() {
    this.disabledActions = false;
  }

  lessQuantity() {
    if (!this.disabledActions) {
      if (this.orderItem.quantity > 1) {
        this.disabledActions = true;
        this.orderCartService.addOrderItem(
          this.translate.currentLang,
          this.orderCartService.getOrderId(),
          this.orderItem.product.productId,
          -1
        );
      }
    }
  }

  moreQuantity() {
    if (!this.disabledActions) {
      this.orderCartService.addOrderItem(
        this.translate.currentLang,
        this.orderCartService.getOrderId(),
        this.orderItem.product.productId,
        1
      );
    }
  }

  deleteProduct() {
    if (!this.disabledActions) {
      this.orderCartService.addOrderItem(
        this.translate.currentLang,
        this.orderCartService.getOrderId(),
        this.orderItem.product.productId,
        -this.orderItem.quantity
      );
    }
  }
}
