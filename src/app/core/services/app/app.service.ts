import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { TokenService } from '../token/token.service';
import { CustomerStorageService } from '../storage/customer/customer-storage.service';
import { APP_CONSTANST } from '../../constants/app.constants';

@Injectable()
export class AppService {
  constructor(
    private logger: NGXLogger,
    private router: Router,
    private tokenService: TokenService,
    private customerStorageService: CustomerStorageService,
  ) {}

  logOut(): void {
    this.logger.trace(`[AppService] - logOut`);
    this.deleteToken();
    this.deleteStorage();
    this.router.navigate(['/']);
  }

  deleteToken(): void {
    this.logger.trace(`[AppService] - deleteToken`);
    this.tokenService.deleteToken();
  }

  deleteStorage(): void {
    this.logger.trace(`[AppService] - deleteStorage`);
    this.deleteElements(APP_CONSTANST.local_storage);
  }

  private deleteElements(list: any): void {
    for (const e in list) {
      if (typeof list[e] === 'object') {
        this.deleteElements(list[e]);
      } else {
        this.deleteElement(list[e]);
      }
    }
  }

  deleteElement = (e: string) => {
    localStorage.removeItem(e);
  }

  setCustomerId(id: number) {
    this.customerStorageService.setCustomerId(id);
  }

  setCustomerType(type: string) {
    this.customerStorageService.setCustomerType(type);
  }

  setAsRegistered(): void {
    this.customerStorageService.setCustomerType(
      APP_CONSTANST.customer_type.registered
    );
  }

  setAsPublic(): void {
    this.customerStorageService.setCustomerType(
      APP_CONSTANST.customer_type.public
    );
  }

  setAsPrivate(): void {
    this.customerStorageService.setCustomerType(
      APP_CONSTANST.customer_type.private
    );
  }
}
