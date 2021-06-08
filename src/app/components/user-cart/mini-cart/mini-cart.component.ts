import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OrderVO } from '../../../model/order/order-vo.model';
import { OrderCartService } from '../../../core/services/order-cart/order-cart.service';
import { CustomerService } from '../../../core/services/customer/customer.service';
import { AppModalsService } from '../../../services/app-modals/app-modals.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {
  @Output('switchEvent') switchEvent = new EventEmitter();

  public orderCart: OrderVO;

  constructor(
    private router: Router,
    private orderCartService: OrderCartService,
    private customerService: CustomerService,
    private modalsService: AppModalsService
  ) {}

  ngOnInit() {
    this.orderCartService.onCartChange.subscribe(
      cart => (this.orderCart = cart)
    );
  }

  goToCart() {
    this.router.navigate(['/cocinando/cart']);
    this.switchEvent.emit();
  }

  onSelectProduct() {
    this.switchEvent.emit();
  }
}
