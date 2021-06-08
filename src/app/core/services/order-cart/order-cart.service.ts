import { Injectable, Inject } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { CreateOrderHttpService } from '../../../services/orders/create-order/service/create-order-http.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { OrderVO } from '../../../model/order/order-vo.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EventEmitter } from '@angular/core';
import { CustomModalMessageVO } from '../../../model/messages/custom-modal-message-vo.model';
import { AppModalErrorService } from '../../../services/app-modals/app-modal-error.service';
import { AppStorageService } from '../storage/app/app-storage.service';
import { LoginVO } from '../../../model/login/login-vo.model';
import { OrderItemAddHttpService } from '../../../services/orders/order-item-add/service/order-item-add-http.service';

@Injectable()
export class OrderCartService {
  /**
   * Cart Observable
   */
  private cart: OrderVO = null;
  private cartMessageSource = new BehaviorSubject<OrderVO>(this.cart);
  public onCartChange = this.cartMessageSource.asObservable();

  constructor(
    private logger: NGXLogger,
    private appStorageService: AppStorageService,
    private createOrderHttpService: CreateOrderHttpService,
    private orderItemAddHttpService: OrderItemAddHttpService
  ) { }

  createNewOrder(login: LoginVO): Observable<number> {
    this.logger.info('[OrderCartService] - createNewOrder: begin');
    return this.createOrderHttpService.createOrder(login);
  }

  getOrderId(): number {
    return this.appStorageService.getOrderId();
  }

  setOrderId(orderId: number) {
    this.appStorageService.setOrderId(orderId);
    //this.onNewOrderCreate.next(orderId);
  }

  removeOrder() {
    this.appStorageService.removeOrder();
  }

  /*loadOrderCart(lang: string) {
    this.getOrderByIdHttpService
      .getOrder(lang, this.getOrderId())
      .subscribe(
        order => this.setCart(order),
        error => this.httpErrorHandlerService.handler(error)
      );
  }*/

  private setCart(order: OrderVO) {
    this.cart = order;
    this.cartMessageSource.next(this.cart);
  }

  addOrderItem(
    lang: string,
    orderId: number,
    itemId: number,
    quantity: number
  ) {
    this.orderItemAddHttpService.add(lang, orderId, itemId, quantity).subscribe(
      order => {
        this.setCart(order);
      }
    );
  }

  /*completeOrder(
    orderId: number,
    successCallback?: Function,
    errorCallback?: Function
  ): void {
    this.orderCompleteService
      .complete(orderId)
      .subscribe(order => {
        this.setCart(order);
        if (successCallback) {
          successCallback(order);
        }
      }, error => (errorCallback ? errorCallback(error) : false));
  }*/
}
