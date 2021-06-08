import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { APP_CONSTANST } from '../../../constants/app.constants';

@Injectable()
export class AppStorageService {
  constructor(private logger: NGXLogger) { }

  getOrderId(): number {
    const orderId = +localStorage.getItem(APP_CONSTANST.local_storage.order_id);
    this.logger.trace(`[AppStorageService] - getOrderId [${orderId}]`);
    return orderId;
  }

  setOrderId(orderId: number) {
    this.logger.trace(`[AppStorageService] - setOrderId [${orderId}]`);
    localStorage.setItem(APP_CONSTANST.local_storage.order_id, '' + orderId);
  }

  removeOrder() {
    this.logger.trace(`[AppStorageService] - removeOrder`);
    localStorage.removeItem(APP_CONSTANST.local_storage.order_id);
  }

  setLanguage(lang: string): void {
    this.logger.trace(`[AppStorageService] - setLanguage [${lang}]`);
    localStorage.setItem(APP_CONSTANST.persist_storage.language, lang);
  }

  getLanguage(): string {
    this.logger.trace(`[AppStorageService] - getLanguage`);
    return localStorage.getItem(APP_CONSTANST.persist_storage.language);
  }
}
