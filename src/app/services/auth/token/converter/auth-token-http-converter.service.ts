import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { TokenVO } from '../../../../model/auth/token/token-vo.model';
import { TokenConverterService } from './token-converter.service';
import { TokenDTO } from '../model/token-dto.model';
import { AuthTokenHttpResponseDTO } from '../model/auth-token-http-response.model';

@Injectable()
export class AuthTokenHttpConverterService {
  constructor(
    private logger: NGXLogger,
    private converter: TokenConverterService
  ) {}

  convertResponse(response: AuthTokenHttpResponseDTO): TokenVO {
    this.logger.info(`[AuthTokenHttpConverterService] begin`);
    const result: TokenVO = this.converter.convertToVO(response as TokenDTO);

    this.logger.info(`[AuthTokenHttpConverterService] end`);

    return result;
  }
}
