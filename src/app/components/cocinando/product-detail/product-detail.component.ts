import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { ProductVO } from '../../../model/product/product-vo.model';
import { ProductDetailsService } from '../../../core/services/product-details/product-details.service';
import { OrderCartService } from '../../../core/services/order-cart/order-cart.service';
import { CustomerService } from '../../../core/services/customer/customer.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public productId: number;
  public product: ProductVO;
  public quantity: number;
  private currentLang: string;

  constructor(
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    protected logger: NGXLogger,
    private productDetailsService: ProductDetailsService,
    private customerService: CustomerService,
    private _location: Location,
    private orderCartService: OrderCartService
  ) {}

  ngOnInit() {
    this.logger.trace('[ProductDetailComponent] - ngOnInit');
    this.subscription = new Subscription();
    this.currentLang = this.translate.currentLang;
    this.quantity = 1;

    // delete las product
    this.productDetailsService.delete();
    // configure subscribers
    this.configureSubscribers();

    // subscribe to path params
    const paramSubscription = this.activatedRoute.params.subscribe(params => {
      this.productId = +params['productId'];
      this.getProductDetailInfo();
    });
    this.subscription.add(paramSubscription);
  }

  configureSubscribers() {
    // subscribe to product change
    const onProductChangeSubs = this.productDetailsService.onProductChange.subscribe(
      product => {
        this.product = product;
      }
    );
    this.subscription.add(onProductChangeSubs);

    // subscribe to language changes
    const onLangChangeSubs = this.translate.onLangChange.subscribe(lang => {
      if (this.currentLang !== lang['lang'] && this.productId !== null) {
        this.currentLang = lang['lang'];
        this.getProductDetailInfo();
      }
    });
    this.subscription.add(onLangChangeSubs);
  }

  getProductDetailInfo() {
    // product details
    this.productDetailsService.getByProductId(
      this.currentLang,
      this.orderCartService.getOrderId(),
      this.productId
    );
  }

  goBack() {
    this._location.back();
  }

  lessQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  moreQuantity() {
    this.quantity++;
  }

  addProduct() {
    this.orderCartService.addOrderItem(
      this.currentLang,
      this.orderCartService.getOrderId(),
      this.product.productId,
      this.quantity
    );
    this.quantity = 1;
  }

  isRegistered(): boolean {
    return this.customerService.isRegistered();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
