import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { GenericResponse } from './../../http-rest/model/generic-response.model';
import { ProductVO } from './../../../model/product/product-vo.model';
import { HttpRestService } from './../../http-rest/service/http-rest.service';
import { ProductsHttpConverterService } from './../converter/products-http-converter.service';
import { TokenService } from '../../../core/services/token/token.service';
import { NGXLogger } from 'ngx-logger';
import { HttpAppHeaders } from '../../http-rest/model/http-app-headers';
import { ProductHttpResponse } from '../model/product-http-response.model';
import { ProductsByCategoryVO } from '../../../model/product/products-by-category-vo.model';
import { HTTP_REST_SERVICES_URL } from '../../../core/constants/services.constants';

@Injectable()
export class ProductHttpService {
  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService,
    private converter: ProductsHttpConverterService,
    private httpService: HttpRestService
  ) {}

  get(
    language: string,
    orderId: number,
    categoryId: number
  ): Observable<ProductsByCategoryVO> {
    this.logger.info('[ProductHttpService] - get: begin');
    return this.httpService
      .getForObject<ProductHttpResponse>(
        this.buildUrl(orderId, categoryId),
        this.tokenService.getToken(),
        this.getHeaders(language)
      )
      .map(response => {
        return this.converter.convertResponse(response);
      });
  }

  /**
   * build the url for endpoint
   * @param orderId
   * @param categoryId
   */
  private buildUrl(
    orderId: number,
    categoryId: number
  ): string {
    let result: string = null;

    if (this.isMocked()) {
      result = `${
        HTTP_REST_SERVICES_URL.CATEGORY_PRODUCTS_GET.mock_url
      }_${categoryId}.json`;
    } else {
      let path = null;
      path = HTTP_REST_SERVICES_URL.CATEGORY_PRODUCTS_GET.url
        .replace(':categoryId', '' + categoryId);
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
