import { Component, OnInit } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OrderCartService } from './../../../core/services/order-cart/order-cart.service';
import { OrderVO } from '../../../model/order/order-vo.model';

@Component({
  selector: 'app-modal-mini-cart',
  templateUrl: './modal-mini-cart.component.html',
  styleUrls: ['./modal-mini-cart.component.scss']
})
export class ModalMiniCartComponent implements OnInit {
  public orderCart: OrderVO;
  public totalProducts: number;

  constructor(
    private logger: NGXLogger,
    private bsModalRef: BsModalRef,
    private orderCartService: OrderCartService
  ) {}

  ngOnInit() {
    this.orderCartService.onCartChange.subscribe(cart => {
      this.orderCart = cart;
      this.totalProducts =
        cart != null && cart.orderItems !== null ? cart.orderItems.length : 0;
    });
  }

  closeModal() {
    this.logger.trace(['[ModalMiniCart] closeModal']);
    this.bsModalRef.hide();
  }

  onSwitch() {
    this.bsModalRef.hide();
  }
}
