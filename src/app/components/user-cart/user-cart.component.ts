import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderCartService } from '../../core/services/order-cart/order-cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  public totalProducts: number;
  constructor(
    private orderCartService: OrderCartService
  ) {}

  ngOnInit() {
    this.orderCartService.onCartChange.subscribe(
      cart => {
        if (cart !== null && cart.orderItems !== null) {
          let quantity = 0;
          for (const orderItem of cart.orderItems) {
            quantity += orderItem.quantity;
          }
          this.totalProducts = quantity;
        }else {
          this.totalProducts = 0;
        }
      }
    );
  }
}
