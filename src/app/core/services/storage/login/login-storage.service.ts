import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { LoginVO } from '../../../../model/login/login-vo.model';
import { APP_CONSTANST } from '../../../constants/app.constants';

@Injectable()
export class LoginStorageService {

  constructor(private logger: NGXLogger) {}

  getLogin(): LoginVO {
    const val = localStorage.getItem(APP_CONSTANST.local_storage.login);
    this.logger.trace(`[LoginStorageService] - getLogin [${val}]`);

    return JSON.parse(val) as LoginVO;
  }

  setLogin(login: any) {
    const val = JSON.stringify(login);
    this.logger.trace(`[LoginStorageService] - setLogin [${val}]`);
    localStorage.setItem(APP_CONSTANST.local_storage.login, val);
  }

  exists(): boolean {
    const exist: boolean =
    localStorage.getItem(APP_CONSTANST.local_storage.login) !== null && (APP_CONSTANST.local_storage.login) !== undefined;

    return exist;
  }

}
