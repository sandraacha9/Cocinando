import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from './../../../core/services/category/category.service';
import { ProductVO } from '../../../model/product/product-vo.model';
import { NGXLogger } from 'ngx-logger';
import { OrderCartService } from './../../../core/services/order-cart/order-cart.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-grid-main',
  templateUrl: './product-grid-main.component.html',
  styleUrls: ['./product-grid-main.component.scss']
})
export class ProductGridMainComponent implements OnInit, OnDestroy {
  @Output('moreEvent') moreEvent = new EventEmitter();

  @Input() products: ProductVO[];
  @Input() title?: string;

  private currentLang: string;
  private currentPage;
  private subscription: Subscription;
  private categoryId: number;
  private subcategoryId: number;

  moreButtonClicked;
  hasMore;
  showGoTop: boolean;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private logger: NGXLogger,
    private translate: TranslateService,
    private orderCartService: OrderCartService
  ) {
    this.products = [];
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showGoTop = window.pageYOffset !== 0;
  }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.subscription = new Subscription();

    const paramSubscription = this.route.params.subscribe(params => {
      this.currentPage = 1;
      this.moreButtonClicked = false;
      this.hasMore = false;
      this.showGoTop = false;

      // Get the category id
      this.categoryId =
        params['categoryId'] !== undefined ? +params['categoryId'] : null;
      this.categoryService.setCurrentSelectedCategory(this.categoryId);

      // Get the subcategory id
      this.subcategoryId =
        params['subcategoryId'] !== undefined ? +params['subcategoryId'] : null;
      this.categoryService.setCurrentSelectedSubCategory(this.subcategoryId);

      // subscribe to the event for get all products for the grid
      const onProductsChangeSubs = this.productsService.onProductsChange.subscribe(
        response => {
          this.products = response && response.data ? response.data : [];
        }
      );
      this.subscription.add(onProductsChangeSubs);

      // get products by category/subcategory
      this.getProducts();
      const onLangChangeSubs = this.translate.onLangChange.subscribe(lang => {
        if (this.currentLang !== lang['lang']) {
          this.currentLang = lang['lang'];
          this.getProducts();
        }
      });
      this.subscription.add(onLangChangeSubs);
    });

    this.subscription.add(paramSubscription);
  }

  private getProducts() {
    this.productsService.emptyCurrentProducts();
    this.productsService.getByCategory(
      this.currentLang,
      this.orderCartService.getOrderId(),
      this.categoryId
    );
  }

  private addProducts() {
    this.currentPage++;
    this.productsService.addProducts(
      this.currentLang,
      this.orderCartService.getOrderId(),
      this.categoryId
    );
  }

  clickMoreButton() {
    this.moreButtonClicked = true;
    this.addProducts();
  }

  onInfiniteScroll() {
    this.logger.trace('[ProductGridMainComponent] onScroll');
    if (this.moreButtonClicked === true) {
      this.addProducts();
    }
  }

  goTop() {
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
