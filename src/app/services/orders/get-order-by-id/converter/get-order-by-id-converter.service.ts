import { NGXLogger } from 'ngx-logger';

import { Injectable } from '@angular/core';
import { OrderVO } from './../../../../model/order/order-vo.model';
import { OrderConverterService } from '../../order/converter/order-converter.service';
import { OrderDTO } from '../../order/model/order-dto.model';

@Injectable()
export class GetOrderByIdConverterService {
  constructor(
    private converter: OrderConverterService,
    private logger: NGXLogger
  ) {}

  convertResponse(order: OrderDTO): OrderVO {
    return this.converter.toVO(order);
  }
}
