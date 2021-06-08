import { TokenService } from '../../../../core/services/token/token.service';
import { OrdersResponse } from '../model/orders-response.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { GenericResponse } from '../../../http-rest/model/generic-response.model';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { OrderVO } from '../../../../model/order/order-vo.model';
import { HttpAppHeaders } from '../../../http-rest/model/http-app-headers';
import { GetOrdersConverterService } from '../converter/get-orders-converter.service';
import { OrderDTO } from '../../order/model/order-dto.model';
import { HTTP_REST_SERVICES_URL } from '../../../../core/constants/services.constants';

@Injectable()
export class GetOrdersHttpService {

  constructor(
    private converter: GetOrdersConverterService,
    private tokenService: TokenService,
    private httpService: HttpRestService
  ) {}

  getOrders(lang: string): Observable<OrderVO[]> {

    return this.httpService
      .getForObject<OrderDTO[]>(
        this.buildUrl(),
        this.tokenService.getToken(),
        this.getHeaders(lang)
      )
      .map(response => {
        return this.converter.convertResponse(response);
      });
  }

  buildUrl(): string {
    let result = null;

    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.ORDERS.mock_url;
    } else {
      result = `${environment.endpoint_url}${
        HTTP_REST_SERVICES_URL.ORDERS.url
      }`;
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
