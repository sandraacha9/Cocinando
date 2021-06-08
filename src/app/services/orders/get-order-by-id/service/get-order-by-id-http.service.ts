import { TokenService } from './../../../../core/services/token/token.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { GenericResponse } from './../../../http-rest/model/generic-response.model';
import { GetOrderByIdConverterService } from './../converter/get-order-by-id-converter.service';
import { HttpRestService } from './../../../http-rest/service/http-rest.service';
import { OrderVO } from './../../../../model/order/order-vo.model';
import { HttpAppHeaders } from '../../../http-rest/model/http-app-headers';
import { OrderDTO } from '../../order/model/order-dto.model';
import { HTTP_REST_SERVICES_URL } from '../../../../core/constants/services.constants';

@Injectable()
export class GetOrderByIdHttpService {
  constructor(
    private converter: GetOrderByIdConverterService,
    private tokenService: TokenService,
    private httpService: HttpRestService
  ) {}

  getOrder(language: string, orderId: number): Observable<OrderVO> {
    return this.httpService
      .getForObject<OrderDTO>(
        this.buildUrl(orderId),
        this.tokenService.getToken(),
        this.getHeaders(language)
      )
      .map(response => {
        return this.converter.convertResponse(response);
      });
  }

  private buildUrl(orderId: number): string {
    let result: string = null;

    if (this.isMocked()) {
      result = `${ HTTP_REST_SERVICES_URL.ORDERS_BY_ID.mock_url}_${orderId}.json`;
    } else {
      const path = HTTP_REST_SERVICES_URL.ORDERS_BY_ID.url.replace(
        ':orderId',
        '' + orderId
      );
      result = `${environment.endpoint_url}${path}`;
    }
    return result;
  }

  /**
   * Generate the headers
   * @param language
   */
  getHeaders(language: string): HttpAppHeaders {
    return new HttpAppHeaders({ 'Accept-Language': language });
  }

  private isMocked(): boolean {
    return environment.use_mocks;
  }
}
