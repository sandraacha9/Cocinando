import { Injectable } from '@angular/core';
import { TokenVO } from '../../../../model/auth/token/token-vo.model';

@Injectable()
export class TokenServiceMock {
  /**
   * return a new token with
   * name - token -type
   */
  getToken(): TokenVO {
    return new TokenVO('name', 'token', 'type');
  }
}
