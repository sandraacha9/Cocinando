import { TokenService } from './../../../core/services/token/token.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { CategoryHttpConverterService } from './../converter/category-http-converter.service';
import { CategoryVO } from './../../../model/category/category-vo.model';
import { HttpRestService } from './../../http-rest/service/http-rest.service';
import { GenericResponse } from '../../http-rest/model/generic-response.model';
import { HttpAppHeaders } from '../../http-rest/model/http-app-headers';
import { HTTP_REST_SERVICES_URL } from '../../../core/constants/services.constants';
import { CategoryDTO } from '../model/category-dto.model';

@Injectable()
export class CategoryGetHttpService {
  constructor(
    private httpService: HttpRestService,
    private tokenService: TokenService,
    private converter: CategoryHttpConverterService
  ) {}

  get(language: string): Observable<CategoryVO[]> {
    return this.httpService
      .getForObject<CategoryDTO[]>(
        this.buildUrl(),
        this.tokenService.getToken(),
        this.getHeaders(language)
      )
      .map(response => {
        return this.converter.convertResponse(response);
      });
  }

  /**
   * build the rest url
   * @param orderId
   */
  private buildUrl(): string {
    let result = null;

    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.CATEGORY_GET.mock_url;
    } else {
      const path = HTTP_REST_SERVICES_URL.CATEGORY_GET.url;
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
