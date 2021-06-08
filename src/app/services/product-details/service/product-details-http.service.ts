import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { ProductVO } from './../../../model/product/product-vo.model';
import { HttpRestService } from './../../http-rest/service/http-rest.service';
import { ProductDetailsHttpConverterService } from './../converter/product-details-http-converter.service';
import { NGXLogger } from 'ngx-logger';
import { TokenService } from '../../../core/services/token/token.service';
import { HttpAppHeaders } from '../../http-rest/model/http-app-headers';
import { ProductDTO } from '../../product/model/product-dto.model';
import { HTTP_REST_SERVICES_URL } from '../../../core/constants/services.constants';

@Injectable()
export class ProductDetailsHttpService {
  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService,
    private converter: ProductDetailsHttpConverterService,
    private httpService: HttpRestService
  ) {}

  getByProductId(
    language: string,
    orderId: number,
    productId: number
  ): Observable<ProductVO> {
    this.logger.info('[ProductDetailsHttpService] - get: begin');
    return this.httpService
      .getForObject<ProductDTO>(
        this.buildUrl(orderId, productId),
        this.tokenService.getToken(),
        this.getHeaders(language)
      )
      .map(product => {
        return this.converter.convertResponse(product);
      });
  }

  /**
   * build the url for endpoint
   * @param productId
   */
  private buildUrl(orderId: number, productId: number): string {
    let result: string = null;

    if (this.isMocked()) {
      result = `${ 
        HTTP_REST_SERVICES_URL.PRODUCT_DETAILS.mock_url
      }_${productId}.json`;
    } else {
      const path = HTTP_REST_SERVICES_URL.PRODUCT_DETAILS.url;
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
