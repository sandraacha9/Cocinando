import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ProductConverterService } from '../../../product/converter/product-converter.service';
import { OrderItemDTO } from '../model/order-item-dto.model';
import { OrderItemVO } from '../../../../model/order/order-item/order-item-vo.model';

@Injectable()
export class OrderItemConverterService {
  constructor(
    private logger: NGXLogger,
    private productConverterService: ProductConverterService
  ) {}

  toVO(elem: OrderItemDTO): OrderItemVO {
    const result: OrderItemVO = {
      id: elem.id,
      quantity: elem.units,
      totalPrice: elem.totalPrice,
      product: this.productConverterService.toVO(elem.item)
    };
    return result;
  }
}
