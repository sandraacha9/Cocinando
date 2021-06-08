import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { EventEmitter } from '@angular/core';
import { ProductHttpService } from '../../../services/products/service/product-http.service';
import { ProductsByCategoryVO } from '../../../model/product/products-by-category-vo.model';

@Injectable()
export class ProductsService {
  private currentProducts: ProductsByCategoryVO = null;
  private currentOrder: string = null;

  private messageSource = new BehaviorSubject<ProductsByCategoryVO>(
    this.currentProducts
  );
  private orderSource = new BehaviorSubject<string>(this.currentOrder);

  public onProductsChange = this.messageSource.asObservable();
  public onOrderChange = this.orderSource.asObservable();
  public onSuccessAction: EventEmitter<any> = new EventEmitter();
  public onErrorAction: EventEmitter<any> = new EventEmitter();

  constructor(
    private logger: NGXLogger,
    private productHttpService: ProductHttpService,
    private httpErrorHandlerService: HttpErrorHandlerService,
  ) {
    this.setOrder('PRI');
  }

  emptyCurrentProducts() {
    this.setCurrrentProducts(null);
  }

  getByCategory(
    language: string,
    orderId: number,
    categoryId: number
  ) {
    this.logger.trace(`[ProductsService] - getByCategory [${categoryId}]`);
    this.productHttpService
      .get(language, orderId, categoryId)
      .subscribe(
        response => {
          this.setCurrrentProducts(response);
          this.onSuccessAction.next();
        },
        error => {
          this.httpErrorHandlerService.handler(error);
          this.onErrorAction.next();
        }
      );
  }

  addProducts(
    language: string,
    orderId: number,
    categoryId: number
  ) {
    this.logger.trace(`[ProductsService] - getByCategory [${categoryId}]`);
    this.productHttpService
      .get(language, orderId, categoryId)
      .subscribe(
        response => {
          this.addToCurrrentProducts(response);
          this.onSuccessAction.next();
        },
        error => {
          this.httpErrorHandlerService.handler(error);
          this.onErrorAction.next();
        }
      );
  }

  private setCurrrentProducts(response: ProductsByCategoryVO) {
    this.currentProducts = response;
    this.messageSource.next(this.currentProducts);
  }

  private addToCurrrentProducts(response: ProductsByCategoryVO) {
    this.currentProducts.data = this.currentProducts.data.concat(response.data);
    this.messageSource.next(this.currentProducts);
  }

  public setOrder(order: string) {
    this.currentOrder = order;
    this.orderSource.next(this.currentOrder);
  }
}
