import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { APP_CONSTANST } from '../../../constants/app.constants';

@Injectable()
export class CustomerStorageService {
  constructor(private logger: NGXLogger) {}

  getCustomerId(): number {
    const val = localStorage.getItem(APP_CONSTANST.local_storage.customer.id);
    this.logger.trace(`[CustomerStorageService]: getCustomerId [${val}]`);
    return +val;
  }

  setCustomerId(val: number) {
    this.logger.trace(`[CustomerStorageService]: setCustomerId [${val}]`);
    localStorage.setItem(APP_CONSTANST.local_storage.customer.id, '' + val);
  }

  getCustomerType(): string {
    const val = localStorage.getItem(
      APP_CONSTANST.local_storage.customer.type
    );
    // this.logger.trace(`[CustomerStorageService]: getCustomerType [${val}]`);
    return val;
  }

  setCustomerType(val: string): void {
    this.logger.trace(`[CustomerStorageService]: setCustomerType [${val}]`);
    localStorage.setItem(APP_CONSTANST.local_storage.customer.type, val);
  }

}
