import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { OrderVO } from '../../../../model/order/order-vo.model';
import { AppModalsService } from '../../../../services/app-modals/app-modals.service';
import { CustomModalMessageVO } from '../../../../model/messages/custom-modal-message-vo.model';
import { OrderCartService } from '../../../../core/services/order-cart/order-cart.service';
import { AppService } from '../../../../core/services/app/app.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorHandlerService } from '../../../../core/services/http-error-handler/http-error-handler.service';
import { Subscription } from 'rxjs/Subscription';
import { OrdersService } from '../../../../core/services/orders/orders.service';

@Component({
  selector: 'app-private-zone-details',
  templateUrl: './private-zone-details.component.html',
  styleUrls: ['./private-zone-details.component.scss']
})
export class PrivateZoneDetailsComponent implements OnInit, OnDestroy {
  private currentLang = null;
  public orderId = null;
  private subscription: Subscription;
  public order: OrderVO;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private appModalsService: AppModalsService,
    private translateService: TranslateService,
    private orderCartService: OrderCartService,
    private httpErrorHandlerService: HttpErrorHandlerService
  ) {}

  ngOnInit() {
    this.subscription = new Subscription();

    this.currentLang = this.translateService.currentLang;
    
    // subscribe to the order
    this.ordersService.onOrdersDetailsChange.subscribe(
      order => {
        window.scrollTo(0, 0);
        this.order = order;
      }
    );

    // subscribe to the order id to show
    const activatedRouteSub = this.activatedRoute.params.subscribe(params => {
      if (params['orderId'] !== undefined) {
        this.orderId = +params['orderId'];
        this.ordersService.getOrderById(this.currentLang, this.orderId);
      }
    });
    this.subscription.add(activatedRouteSub);

    const onLangChangeSub = this.translate.onLangChange.subscribe(lang => {
      if (this.currentLang !== lang['lang'] && this.orderId) {
        this.currentLang = lang['lang'];
        this.ordersService.getOrderById(this.currentLang, this.orderId);
      }
    });
    this.subscription.add(onLangChangeSub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
