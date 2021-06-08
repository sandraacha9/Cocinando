import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../../../../../environments/environment';
import { TokenService } from '../../../../core/services/token/token.service';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { HttpAppHeaders } from '../../../http-rest/model/http-app-headers';
import { OrderVO } from '../../../../model/order/order-vo.model';
import { HTTP_REST_SERVICES_URL } from '../../../../core/constants/services.constants';
import { OrderConverterService } from '../../order/converter/order-converter.service';

@Injectable()
export class OrderItemAddHttpService {
  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService,
    private httpService: HttpRestService,
    private orderConverterService: OrderConverterService
  ) {}

  add(
    lang: string,
    orderId: number,
    itemId: number,
    quantity: number
  ): Observable<OrderVO> {
    this.logger.info('[OrderItemAddHttpService] - add: begin');
    return this.call(lang, orderId, itemId, quantity).map(response => this.orderConverterService.toVO(response));
  }

  private call(
    lang: string,
    orderId: number,
    itemId: number,
    quantity: number
  ): Observable<any> {
    let result: Observable<any>;

    if (this.isMocked()) {
      result = this.httpService.getForObject<any>(
        this.buildUrl(orderId, itemId, quantity)
      );
    } else {
      result = this.httpService.putForObject<any>(
        this.buildUrl(orderId, itemId, quantity),
        null,
        this.tokenService.getToken(),
        this.getHeaders(lang)
      );
    }

    return result;
  }

  /**
   * build the url for endpoint
   * @param orderId
   * @param categoryId
   */
  private buildUrl(orderId: number, itemId: number, quantity: number): string {
    let result: string = null;

    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.ORDER_ITEM_ADD.mock_url;
    } else {
      const path = HTTP_REST_SERVICES_URL.ORDER_ITEM_ADD.url
        .replace(':orderId', '' + orderId)
        .replace(':itemId', '' + itemId)
        .replace(':quantity', '' + quantity);
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
