import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { TokenService } from '../token/token.service';
import { APP_CONSTANST } from '../../constants/app.constants';
import { CustomerStorageService } from '../storage/customer/customer-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private logger: NGXLogger,
    private customerStorageService: CustomerStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let canActivate: boolean;
    let redirectUrl: string;
    if (
      this.customerStorageService.getCustomerType() == APP_CONSTANST.customer_type.public || 
      this.customerStorageService.getCustomerType() == APP_CONSTANST.customer_type.registered
    ) {
      canActivate = false;
      redirectUrl = '/cocinando';
    } else if (
      this.customerStorageService.getCustomerType() == APP_CONSTANST.customer_type.private
    ) {
      canActivate = false;
      redirectUrl = '/private-zone';
    } else {
      canActivate = false;
      redirectUrl = '/login';
    }

    if (!canActivate) {
      this.router.navigate([redirectUrl]);
    }

    return canActivate;
  }
}
