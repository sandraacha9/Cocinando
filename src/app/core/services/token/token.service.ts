import { EventEmitter, Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { AuthTokenHttpService } from '../../../services/auth/token/service/auth-token-http.service';
import { TokenVO } from '../../../model/auth/token/token-vo.model';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { Subscription } from 'rxjs/Subscription';
import { TokenStorageService } from '../storage/token/token-storage.service';

@Injectable()
export class TokenService {
  /**
   * emit cart animation
   */
  public onTokenChange: EventEmitter<TokenVO> = new EventEmitter();

  /**
   * emit get token error
   */
  public onGetTokenError: EventEmitter<any> = new EventEmitter();

  constructor(
    private logger: NGXLogger,
    private httpErrorHandlerService: HttpErrorHandlerService,
    private tokenStorageService: TokenStorageService,
    private authTokenHttpService: AuthTokenHttpService
  ) {}

  getInitCredentials(): Subscription {
    this.logger.info(`[TokenService] - getInitCredentials: begin`);

    return this.authTokenHttpService.auth().subscribe(
      token => {
        this.saveToken(token);
        this.onTokenChange.next(token);
      },
      error => {
        this.httpErrorHandlerService.handler(error);
        this.onGetTokenError.next();
      }
    );
  }

  getPublicClientCredentials(): Subscription {
    this.logger.info(`[TokenService] - getPublicClientCredentials: begin`);

    return this.authTokenHttpService
      .auth()
      .subscribe(
        token => this.saveToken(token),
        error => this.httpErrorHandlerService.handler(error)
      );
  }

  saveToken(token: TokenVO): void {
    this.tokenStorageService.saveToken(token);
  }

  getToken(): TokenVO {
    return this.tokenStorageService.getToken();
  }

  deleteToken(): void {
    this.tokenStorageService.deleteToken();
  }

  existToken(): boolean {
    return this.tokenStorageService.existToken();
  }

  setTokenType(type: string): void {
    const token = this.getToken();
    token.type = type;
    this.saveToken(token);
  }
}
