import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../../../../../environments/environment';
import { TokenService } from '../../../../core/services/token/token.service';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { CreateOrderConverterService } from '../converter/create-order-converter.service';
import { CreateOrderHttpResponseDTO } from '../model/create-order-http-response.model';
import { LoginVO } from '../../../../model/login/login-vo.model';
import { HTTP_REST_SERVICES_URL } from '../../../../core/constants/services.constants';

@Injectable()
export class CreateOrderHttpService {
  constructor(
    private logger: NGXLogger,
    private converter: CreateOrderConverterService,
    private tokenService: TokenService,
    private httpService: HttpRestService
  ) {}

  createOrder(login: LoginVO): Observable<number> {
    this.logger.info('[CreateOrderHttpService] - get: begin');
    return this.call(login).map(response =>
      this.converter.convertResponse(response)
    );
  }

  private call(login: LoginVO): Observable<CreateOrderHttpResponseDTO> {
    let result: Observable<any>;

    if (this.isMocked()) {
      result = this.httpService.getForObject<CreateOrderHttpResponseDTO>(
        this.buildUrl()
      );
    } else {
      result = this.httpService.postForObject<CreateOrderHttpResponseDTO>(
        this.buildUrl(),
        this.converter.convertRequest(login),
        this.tokenService.getToken()
      );
    }

    return result;
  }

  /**
   * build the url for endpoint
   * @param orderId
   * @param categoryId
   */
  private buildUrl(): string {
    let result: string = null;

    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.CREATE_ORDER.mock_url;
    } else {
      result = `${environment.endpoint_url}${
        HTTP_REST_SERVICES_URL.CREATE_ORDER.url
      }`;
    }

    return result;
  }

  private isMocked(): boolean {
    return environment.use_mocks;
  }
}
