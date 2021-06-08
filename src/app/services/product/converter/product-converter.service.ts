import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { ProductVO } from '../../../model/product/product-vo.model';
import { ProductDTO } from '../model/product-dto.model';

@Injectable()
export class ProductConverterService {
  constructor(
  ) {}

  toVO(elem: ProductDTO): ProductVO {
    const result = new ProductVO(
      elem.productId,
      elem.title,
      elem.description,
      elem.url,
      elem.price,
      elem.allergens,
      elem.category
    );

    // this.logger.trace(
    //   `[ProductConverterService] - toVO: \n [${JSON.stringify(result)}]`
    // );

    return result;
  }
}
