import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { TokenVO } from '../../../../model/auth/token/token-vo.model';
import { APP_CONSTANST } from '../../../constants/app.constants';

@Injectable()
export class TokenStorageService {
  constructor(private logger: NGXLogger) {}

  saveToken(val: TokenVO): void {
    const tokenjson = JSON.stringify(val);
    this.logger.trace(`[TokenStorageService]: saveToken`);
    localStorage.setItem(APP_CONSTANST.local_storage.token, tokenjson);
  }

  getToken(): TokenVO {
    const val: string = localStorage.getItem(APP_CONSTANST.local_storage.token);
    this.logger.trace(
      `[TokenStorageService]: getToken [${val !== undefined ? 'informed' : 'empty'}]`
    );

    return JSON.parse(val) as TokenVO;
  }

  deleteToken(): void {
    this.logger.trace(`[TokenStorageService]: deleteToken`);
    localStorage.removeItem(APP_CONSTANST.local_storage.token);
  }

  existToken(): boolean {
    const val: boolean = !!localStorage.getItem(
      APP_CONSTANST.local_storage.token
    );
    this.logger.trace(`[TokenStorageService]: existToken [${val}]`);

    return val;
  }
}
