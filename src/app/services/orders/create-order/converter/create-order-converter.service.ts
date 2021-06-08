import { NGXLogger } from 'ngx-logger';

import { Injectable } from '@angular/core';
import { CreateOrderHttpRequestDTO } from '../model/create-order-http-request.model';
import { CreateOrderHttpResponseDTO } from '../model/create-order-http-response.model';
import { LoginVO } from '../../../../model/login/login-vo.model';

@Injectable()
export class CreateOrderConverterService {
  constructor(private logger: NGXLogger) {}

  convertRequest(login: LoginVO): CreateOrderHttpRequestDTO {
    this.logger.info('[CreateOrderConverterService] - convertRequest: begin');
    const result: CreateOrderHttpRequestDTO = new CreateOrderHttpRequestDTO(
      login.ticket
    );

    this.logger.trace(
      `[CreateOrderConverterService] - convertRequest [${JSON.stringify(
        result
      )}]`
    );
    return result;
  }

  convertResponse(response: CreateOrderHttpResponseDTO): number {
    this.logger.info('[CreateOrderConverterService] - convertResponse: begin');
    const result: number = response.idOrder;

    this.logger.trace(
      `[CreateOrderConverterService] - convertResponse [${result}]`
    );
    return result;
  }
}
