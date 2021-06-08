import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../../environments/environment';
import { HTTP_REST_SERVICES_URL } from '../../../../core/constants/services.constants';
import { TokenVO } from '../../../../model/auth/token/token-vo.model';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { AuthTokenHttpConverterService } from '../converter/auth-token-http-converter.service';
import { AuthTokenHttpResponseDTO } from '../model/auth-token-http-response.model';

@Injectable()
export class AuthTokenHttpService {
  constructor(
    private logger: NGXLogger,
    private converter: AuthTokenHttpConverterService,
    private httpService: HttpRestService
  ) {}

  auth(): Observable<TokenVO> {
    this.logger.info(`[AuthTokenHttpService] - begin`);

    return this.httpService
      .getForObject<AuthTokenHttpResponseDTO>(this.buildUrl())
      .map(response => this.converter.convertResponse(response));
  }

  private buildUrl(): string {
    return this.isMocked()
      ? HTTP_REST_SERVICES_URL.AUTH_TOKEN.mock_url
      : `${environment.endpoint_url}${HTTP_REST_SERVICES_URL.AUTH_TOKEN.url}`;
  }

  isMocked = (): boolean  => {
    return environment.use_mocks;
  }
}
