import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { TokenService } from '../token/token.service';
import { APP_CONSTANST } from '../../constants/app.constants';

@Injectable()
export class AuthGuardConfirmation implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      !this.tokenService.existToken() ||
      (this.tokenService.existToken() &&
        this.tokenService.getToken().type !== APP_CONSTANST.TOKEN_TYPES.CONFIRMATION_PAGE)
    ) {
      if (this.tokenService.getToken().type === APP_CONSTANST.TOKEN_TYPES.PUBLIC) {
        this.router.navigate(['/']);

        return false;
      } else if (this.tokenService.getToken().type === APP_CONSTANST.TOKEN_TYPES.LOGGED) {
        this.router.navigate(['/cocinando']);

        return false;
      }
    }

    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

}
