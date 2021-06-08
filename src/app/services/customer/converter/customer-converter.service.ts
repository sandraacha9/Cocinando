import { CustomerDTO } from '../model/customer-dto.model';
import { CustomerVO } from '../../../model/customer/customer-vo.model';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class CustomerConverterService {
  constructor(private logger: NGXLogger) {}

  toVO(response: CustomerDTO): CustomerVO {
    this.logger.info('[CustomerConverterService] - toVO: begin');
    const result = new CustomerVO(
      response.id,
      response.type,
      response.name,
      response.surname
    );

    this.logger.trace(`[CustomerConverterService] toVO: \n [${JSON.stringify(result)}]`);
    return result;
  }
}
