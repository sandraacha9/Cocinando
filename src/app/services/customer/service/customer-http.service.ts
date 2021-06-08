import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { CustomerVO } from '../../../model/customer/customer-vo.model';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs/Observable';
import { HttpRestService } from '../../http-rest/service/http-rest.service';
import { TokenService } from '../../../core/services/token/token.service';
import { CustomerConverterService } from '../converter/customer-converter.service';
import { CustomerDTO } from '../model/customer-dto.model';
import { HTTP_REST_SERVICES_URL } from '../../../core/constants/services.constants';

@Injectable()
export class CustomerHttpService {
  constructor(
    private logger: NGXLogger,
    private tokenService: TokenService,
    private converter: CustomerConverterService,
    private httpService: HttpRestService
  ) {}

  get(): Observable<CustomerVO> {
    this.logger.info('[CustomerDetailsHttpService] - get: begin');
    return this.httpService
      .getForObject<CustomerDTO>(this.buildUrl(), this.tokenService.getToken())
      .map(response => {
        return this.converter.toVO(response);
      });
  }

  private buildUrl(): string {
    let result: string = null;

    if (this.isMocked()) {
      result = HTTP_REST_SERVICES_URL.CUSTOMER_DETAILS.mock_url;
    } else {
      result = `${environment.endpoint_url}${
        HTTP_REST_SERVICES_URL.CUSTOMER_DETAILS.url
      }`;
    }

    return result;
  }

  private isMocked(): boolean {
    return environment.use_mocks;
  }
}
