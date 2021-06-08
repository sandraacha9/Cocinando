import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

import { ProductDetailsHttpService } from './../../../services/product-details/service/product-details-http.service';
import { ProductVO } from './../../../model/product/product-vo.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';

@Injectable()
export class ProductDetailsService {
  private isCurrentProductDetailsQuery = false;
  private currentProductDetails: ProductVO = null;
  private messageSource = new BehaviorSubject<ProductVO>(
    this.currentProductDetails
  );
  public onProductChange = this.messageSource.asObservable();

  constructor(
    private logger: NGXLogger,
    private productDetailsHttpService: ProductDetailsHttpService,
    private httpErrorHandlerService: HttpErrorHandlerService
  ) {}

  /**
   * When loggin out - call to delete
   */
  delete() {
    this.setCurrrentProductDetails(null);
  }

  getByProductId(language: string, orderId: number, productId: number) {
    this.logger.trace(
      `[ProductDetailsService] - getByProductId [${language} - ${productId} - ${this.isCurrentProductDetailsQuery}]`
    );

    try {
      if (!this.isCurrentProductDetailsQuery) {
        this.productDetailsHttpService
          .getByProductId(language, orderId, productId)
          .subscribe(
            product => {
              this.isCurrentProductDetailsQuery = false;
              this.setCurrrentProductDetails(product);
            },
            error => {
              this.isCurrentProductDetailsQuery = false;
              this.httpErrorHandlerService.handler(error);
            }
          );
      }
    } catch (err) {
      this.isCurrentProductDetailsQuery = false;
    }
  }

  private setCurrrentProductDetails(product: ProductVO) {
    this.currentProductDetails = product;
    this.messageSource.next(this.currentProductDetails);
  }
}
