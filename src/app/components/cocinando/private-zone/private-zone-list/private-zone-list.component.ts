import { OrderVO } from '../../../../model/order/order-vo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { OrdersService } from './../../../../core/services/orders/orders.service';
import { Router } from '@angular/router';
import { OrdersService } from '../../../../core/services/orders/orders.service';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-private-zone-list',
  templateUrl: './private-zone-list.component.html',
  styleUrls: ['./private-zone-list.component.scss']
})
export class PrivateZoneListComponent implements OnInit {

  orderId: number;
  orderList: OrderVO[];
  @Output('switchEvent') switchEvent = new EventEmitter();

  constructor
  (
    private ordersService: OrdersService,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ordersService.onOrdersListChange.subscribe(
      orderList => (this.orderList = orderList)
    );
    this.ordersService.onOrdersDetailsChange.subscribe(
      order => (this.orderId = (order !== null) ? order.orderId : null)
    );
  }

  switchOrder(order: OrderVO) {
    this.router.navigate(['./cocinando/private-zone/order', order.orderId]);
    this.orderId = order.orderId;
    this.switchEvent.emit();
    this.hideSidebar();
  }

  hideSidebar() {
    this.sidebarService.setSidebarVisibility(false);
  }
}
