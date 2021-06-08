import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from '../../core/services/category/category.service';
import { CategoryVO } from '../../model/category/category-vo.model';
import { CustomerService } from '../../core/services/customer/customer.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { OrdersService } from '../../core/services/orders/orders.service';

@Component({
  selector: 'app-cocinando',
  templateUrl: './cocinando.component.html',
  styleUrls: ['./cocinando.component.scss']
})
export class CocinandoComponent implements OnInit {
  private currentLang: string;
  private subscription: Subscription;
  private paramSubscription: any;

  private selectedCategoryId: number;
  private categories: CategoryVO[];
  category: CategoryVO;
  sidebarShow: boolean;

  constructor(
    public router: Router,
    private translate: TranslateService,
    private categoryService: CategoryService,
    private customerService: CustomerService,
    private sidebarService: SidebarService,
    private ordersService: OrdersService,
    private changeRef: ChangeDetectorRef
  ) {
    this.sidebarShow = false;
  }

  onSelectCategory(): void {
    this.sidebarService.setSidebarVisibility(false);
  }

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(this.paramSubscription);

    this.currentLang = this.translate.currentLang;
    this.loadAsyncData();

    const onSidebarVisibleChangeSubs = this.sidebarService.onSidebarVisibleChange.subscribe(
      state => (this.sidebarShow = state)
    );
    this.subscription.add(onSidebarVisibleChangeSubs);

    const onLangChangeSubs = this.translate.onLangChange.subscribe(lang => {
      if (this.currentLang !== lang['lang']) {
        this.currentLang = lang['lang'];
        this.loadAsyncData();
      }
    });
    this.subscription.add(onLangChangeSubs);
  }

  loadAsyncData() {
    this.categoryService.load(
      this.currentLang
    );
    // on category id change
    const onCurrentSelectedCategoryChangeSubs = this.categoryService.onCurrentSelectedCategoryChange.subscribe(
      categoryId => {
        this.selectedCategoryId = categoryId;
        this.fillHeaderInfo();
      }
    );
    this.subscription.add(onCurrentSelectedCategoryChangeSubs);

    // subscribe to category changes
    const onCategoryChangeSubs = this.categoryService.onCategoryChange.subscribe(
      categories => {
        this.categories = categories;
        this.fillHeaderInfo();
      }
    );
    this.subscription.add(onCategoryChangeSubs);

    // get all orders from the logged customer
    this.ordersService.getOrders(this.currentLang);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngDoCheck(): void {
    this.changeRef.detectChanges();
  }

  private fillHeaderInfo() {
    if (this.categories != null && this.selectedCategoryId != null) {
      for (const category of this.categories) {
        if (category.categoryId === this.selectedCategoryId) {
          this.category = category;
        }
      }
    }
  }

  isRegistered(): boolean {
    return this.customerService.isRegistered();
  }

  isPrivate(): boolean {
    return this.customerService.isPrivate();
  }

  hideSidebar() {
    this.sidebarService.setSidebarVisibility(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}