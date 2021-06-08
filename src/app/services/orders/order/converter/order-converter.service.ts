import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { OrderItemConverterService } from '../../order-item/converter/order-item-converter.service';
import { OrderVO } from '../../../../model/order/order-vo.model';
import { OrderDTO } from '../model/order-dto.model';
import { OrderItemDTO } from '../../order-item/model/order-item-dto.model';
import { OrderItemVO } from '../../../../model/order/order-item/order-item-vo.model';

@Injectable()
export class OrderConverterService {
  constructor(
    private logger: NGXLogger,
    private orderItemConverterService: OrderItemConverterService
  ) {}

  toVO(elem: OrderDTO): OrderVO {
    this.logger.info('[OrderConverterService] - toVO: begin');
    const result: OrderVO = {
      orderId: elem.idOrder,
      ticket: elem.ticket,
      total: elem.total,
      orderItems: this.itemsToVO(elem.details)
    };

    this.logger.trace(
      `[OrderConverterService] - toVO: \n [${JSON.stringify(result)}]`
    );
    return result;
  }

  private itemsToVO(items: OrderItemDTO[]): OrderItemVO[] {
    let result: OrderItemVO[] = null;

    if (items) {
      result = items.map(item => this.orderItemConverterService.toVO(item));
    }

    return result;
  }
}
