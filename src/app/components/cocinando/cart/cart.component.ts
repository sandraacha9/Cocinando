import { OrderCartService } from './../../../core/services/order-cart/order-cart.service';
import { CategoryService } from './../../../core/services/category/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModalsService } from '../../../services/app-modals/app-modals.service';
import { OrderVO } from '../../../model/order/order-vo.model';
import { HttpErrorHandlerService } from '../../../core/services/http-error-handler/http-error-handler.service';
import { OrderItemVO } from '../../../model/order/order-item/order-item-vo.model';
import { CustomModalMessageVO } from '../../../model/messages/custom-modal-message-vo.model';
import { AppService } from '../../../core/services/app/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public orderCart: OrderVO;
  public totalProducts: number;
  public cartForm: FormGroup;
  public checkConditions: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService,
    private appModalsService: AppModalsService,
    private appService: AppService,
    private orderCartService: OrderCartService
  ) {}

  ngOnInit() {
    this.orderCartService.onCartChange.subscribe(
      cart => {
        this.orderCart = cart
        this.totalProducts =
        cart !== null && cart.orderItems != null ? cart.orderItems.length : 0;
      }
    );
    this.categoryService.setCurrentSelectedCategory(null);
    this.buildForm();
  }

  buildForm() {
    // initialize form controls
    const controls = this.initializeControls();
    this.cartForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      checkConditions: [this.checkConditions, [Validators.requiredTrue]]
    };
    return controls;
  }

  confirmOrder() {
    this.appModalsService.openActionSuccessModal(
      new CustomModalMessageVO(
        'general.title',
        'cart.modalActionSuccessConfirm'
      )
    );
    this.appService.logOut();
  }
}
