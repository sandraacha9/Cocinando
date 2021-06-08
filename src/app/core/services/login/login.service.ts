import { Inject, Injectable } from '@angular/core';
import { LoginVO } from '../../../model/login/login-vo.model';
import { LoginHttpService } from '../../../services/login/service/login-http.service';
import { NGXLogger } from 'ngx-logger';
import { LoginStorageService } from '../storage/login/login-storage.service';
import { PrivateVO } from '../../../model/login/private-vo.model';

@Injectable()
export class LoginService {

  constructor(
    protected logger: NGXLogger,
    private loginHttpService: LoginHttpService,
    public loginStorageService: LoginStorageService,
  ) { }

  doLogin(
    login: LoginVO,
    onSuccess?: Function,
    onFailure?: Function
  ): void {
    this.logger.trace(`[LoginService] - doLogin`);

    this.loginHttpService.doLogin(login).subscribe(
      response => {
        this.loginStorageService.setLogin(login);
        if (onSuccess) {
          onSuccess(response);
        }
      },
      error => {
        if (onFailure) {
          onFailure(error);
        }
      }
    );
  }

  doPrivate(
    login: PrivateVO,
    onSuccess?: Function,
    onFailure?: Function
  ): void {
    this.logger.trace(`[LoginService] - doPrivate`);

    this.loginHttpService.doPrivate(login).subscribe(
      response => {
        this.loginStorageService.setLogin(login);
        if (onSuccess) {
          onSuccess(response);
        }
      },
      error => {
        if (onFailure) {
          onFailure(error);
        }
      }
    );
  }
}
