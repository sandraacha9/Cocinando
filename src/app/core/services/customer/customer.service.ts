import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CustomerStorageService } from '../storage/customer/customer-storage.service';
import { CustomerVO } from './../../../model/customer/customer-vo.model';
import { NGXLogger } from 'ngx-logger';
import { CustomerHttpService } from '../../../services/customer/service/customer-http.service';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { APP_CONSTANST } from '../../constants/app.constants';
import { AppStorageService } from '../storage/app/app-storage.service';

@Injectable()
export class CustomerService {
  private customerVO: CustomerVO;
  private temporalCustomer: CustomerVO;
  private messageSource = new BehaviorSubject<CustomerVO>(new CustomerVO());
  currentMessage = this.messageSource.asObservable();

  constructor(
    private customerStorageService: CustomerStorageService,
    private customerHttpService: CustomerHttpService,
    private appStorageService: AppStorageService,
    private logger: NGXLogger,
    private httpErrorHandlerService: HttpErrorHandlerService
  ) { }

  public loadCustomer() {
    this.logger.trace(`[CustomerService] - loadCustomer`);
    this.customerHttpService
      .get()
      .subscribe(
        customer => this.setCustomer(customer),
        error => this.httpErrorHandlerService.handler(error)
      );
  }

  public getCurrentCustomer(): CustomerVO {
    return this.customerVO;
  }

  private setCustomer(customer: CustomerVO) {
    this.logger.trace(
      `[CustomerService] - setCustomer [${JSON.stringify(customer)}]`
    );
    this.customerVO = customer;
    this.messageSource.next(this.customerVO);
  }

  /**
   * Get first step guest customer data
   */
  getTemporalCustomer() {
    return this.temporalCustomer;
  }

  /**
   * Set first step guest customer data
   */
  setTemporalCustomer(customer: CustomerVO) {
    this.temporalCustomer = customer;
  }

  existTemporalCustomer() {
    return this.temporalCustomer ? true : false;
  }

  isRegistered() {
    return (
      this.customerStorageService.getCustomerType() ===
      APP_CONSTANST.customer_type.registered
    );
  }

  isPublic() {
    return (
      this.customerStorageService.getCustomerType() ===
      APP_CONSTANST.customer_type.public
    );
  }

  isPrivate() {
    return (
      this.customerStorageService.getCustomerType() ===
      APP_CONSTANST.customer_type.private
    );
  }
}
