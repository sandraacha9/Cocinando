import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { TokenService } from '../../../core/services/token/token.service';
import { LoginVO } from '../../../model/login/login-vo.model';
import { LoginResponseVO } from './../../../model/login/login-response-vo.model';
import { LoginRequest } from './../model/login-request.model';
import { LoginResponse } from './../model/login-response.model';
import { APP_CONSTANST } from '../../../core/constants/app.constants';
import { PrivateVO } from '../../../model/login/private-vo.model';
import { PrivateRequest } from '../model/private-request.model';

@Injectable()
export class LoginConverterService {
  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService
  ) {}

  convertRequest(request: LoginVO): LoginRequest {
    this.logger.info('[LoginConverterService] - convertRequest: begin');
    const result: LoginRequest = new LoginRequest(request.ticket);

    return result;
  }

  convertResponse(response: LoginResponse): LoginResponseVO {
    this.logger.info('[LoginConverterService] - convertResponse: begin');
    const result: LoginResponseVO = new LoginResponseVO(undefined, response.token, APP_CONSTANST.TOKEN_TYPES.LOGGED);

    return result;
  }

  convertPrivateRequest(request: PrivateVO): PrivateRequest {
    this.logger.info('[LoginConverterService] - convertRequest: begin');
    const result: PrivateRequest = new PrivateRequest(request.user, request.pass);

    return result;
  }
}
