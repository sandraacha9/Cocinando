import { Injectable, Inject } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { Observable } from 'rxjs/Observable';
import { OrderVO } from './../../../model/order/order-vo.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { GetOrderByIdHttpService } from '../../../services/orders/get-order-by-id/service/get-order-by-id-http.service';
import { GetOrdersHttpService } from '../../../services/orders/get-orders-by-customer/service/get-orders-http.service';

@Injectable()
export class OrdersService {
  private ordersList: OrderVO[] = null;
  private messageSourceOrdersList = new BehaviorSubject<OrderVO[]>(
    this.ordersList
  );
  public onOrdersListChange = this.messageSourceOrdersList.asObservable();

  private orderDetails: OrderVO = null;
  private messageSourceOrderDetail = new BehaviorSubject<OrderVO>(
    this.orderDetails
  );
  public onOrdersDetailsChange = this.messageSourceOrderDetail.asObservable();

  constructor(
    private logger: NGXLogger,
    private translante: TranslateService,
    private getOrdersHttpService: GetOrdersHttpService,
    private getOrderByIdHttpService: GetOrderByIdHttpService,
    private httpErrorHandlerService: HttpErrorHandlerService
  ) { }

  getOrders(lang: string) {
    this.getOrdersHttpService.getOrders(lang).subscribe(
      order => this.setOrdersList(order),
      error => {
        this.setOrdersList([]);
        this.httpErrorHandlerService.handler(error);
      }
    );
  }

  getOrders$(lang: string) {
    return this.getOrdersHttpService.getOrders(lang);
  }

  getOrderById(lang: string, orderId: number) {
    this.getOrderByIdHttpService
      .getOrder(lang, orderId)
      .subscribe(
        order => this.setOrderDetails(order),
        error => this.httpErrorHandlerService.handler(error)
      );
  }

  getOrderById$(lang: string, orderId: number): Observable<OrderVO> {
    return this.getOrderByIdHttpService
      .getOrder(lang, orderId);
  }

  removeOrderDetails() {
    this.setOrderDetails(null);
  }

  private setOrdersList(ordersList: OrderVO[]) {
    this.ordersList = ordersList;
    this.messageSourceOrdersList.next(this.ordersList);
  }

  private setOrderDetails(orderDetails: OrderVO) {
    this.orderDetails = orderDetails;
    this.messageSourceOrderDetail.next(this.orderDetails);
  }
}
