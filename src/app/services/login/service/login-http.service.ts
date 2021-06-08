import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { LoginResponseVO } from './../../../model/login/login-response-vo.model';
import { LoginResponse } from './../model/login-response.model';
import { Observable } from 'rxjs/Observable';
import { LoginVO } from './../../../model/login/login-vo.model';
import { LoginConverterService } from './../converter/login-converter.service';
import { HttpRestService } from '../../http-rest/service/http-rest.service';
import { HTTP_REST_SERVICES_URL } from '../../../core/constants/services.constants';
import { NGXLogger } from 'ngx-logger';
import { TokenService } from '../../../core/services/token/token.service';
import { PrivateVO } from '../../../model/login/private-vo.model';

@Injectable()
export class LoginHttpService {
  urlEnum = HTTP_REST_SERVICES_URL;

  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService,
    private converter: LoginConverterService,
    private httpService: HttpRestService
  ) { }

  doLogin(loginVO: LoginVO): Observable<LoginResponseVO> {
    this.logger.info(`[LoginHttpService] - begin`);

    return this.call(loginVO).map(response =>
      this.converter.convertResponse(response)
    );
  }

  call(loginVO: LoginVO): Observable<LoginResponse> {
    let result: Observable<LoginResponse>;

    if (this.isMocked()) {
      result = this.httpService.getForObject<LoginResponse>(this.buildUrl());
    } else {
      result = this.httpService.postForObject<LoginResponse>(
        this.buildUrl(),
        this.converter.convertRequest(loginVO),
        this.tokenService.getToken()
      );
    }

    return result;
  }

  private buildUrl(): string {
    let result: string;
    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.LOGIN.mock_url;
    } else {
      result = `${environment.endpoint_url}${
        HTTP_REST_SERVICES_URL.LOGIN.url
        }`;
    }

    return result;
  }

  doPrivate(privateVO: PrivateVO): Observable<LoginResponseVO> {
    this.logger.info(`[LoginHttpService] - begin`);

    return this.callPrivate(privateVO).map(response =>
      this.converter.convertResponse(response)
    );
  }

  callPrivate(privateVO: PrivateVO): Observable<LoginResponse> {
    let result: Observable<LoginResponse>;

    if (this.isMocked()) {
      result = this.httpService.getForObject<LoginResponse>(this.buildPrivateUrl(privateVO));
    } else {
      result = this.httpService.postForObject<LoginResponse>(
        this.buildPrivateUrl(privateVO),
        this.converter.convertPrivateRequest(privateVO),
        this.tokenService.getToken()
      );
    }

    return result;
  }

  private buildPrivateUrl(privateVO: PrivateVO): string {
    let result: string;
    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.LOGIN_PRIVATE.mock_url;
    } else {
      result = `${environment.endpoint_url}${
        HTTP_REST_SERVICES_URL.LOGIN.url
        }`;
    }

    return result;
  }

  isMocked = (): boolean => {
    return environment.use_mocks;
  }
}
