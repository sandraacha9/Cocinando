import { OrderVO } from '../../../../model/order/order-vo.model';
import { NGXLogger } from 'ngx-logger';

import { Injectable } from '@angular/core';
import { OrderConverterService } from '../../order/converter/order-converter.service';
import { OrderDTO } from '../../order/model/order-dto.model';

@Injectable()
export class GetOrdersConverterService {
  constructor(
    private orderConverterService: OrderConverterService,
    private logger: NGXLogger
  ) {}

  convertResponse(response: OrderDTO[]): OrderVO[] {
    const result: OrderVO[] = [];
    for (const order of response) {
      result.push(this.orderConverterService.toVO(order));
    }
    return result;
  }
}
