import { Component, OnInit } from '@angular/core';
import { AppModalsService } from '../../../services/app-modals/app-modals.service';
import { OrderCartService } from '../../../core/services/order-cart/order-cart.service';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { CustomerService } from '../../../core/services/customer/customer.service';

@Component({
  selector: 'app-header-phone',
  templateUrl: './header-phone.component.html',
  styleUrls: ['./header-phone.component.scss']
})
export class HeaderPhoneComponent implements OnInit {
  public totalProducts: number;

  constructor(
    private orderCartService: OrderCartService,
    private appModals: AppModalsService,
    private customerService: CustomerService,
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this.orderCartService.onCartChange.subscribe(
      cart => {
        let quantity = 0;
        if (cart && cart.orderItems) {
          for (const orderItem of cart.orderItems) {
            quantity += orderItem.quantity;
          }
        }
        this.totalProducts = quantity;
      }
    );
  }

  isRegistered(): boolean {
    return this.customerService.isRegistered();
  }

  showMiniCart() {
    this.appModals.openMiniCart();
  }

  showSidebar() {
    this.sidebarService.setSidebarVisibility(true);
  }
}
