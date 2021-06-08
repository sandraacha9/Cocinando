import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { ProductHttpResponse } from '../model/product-http-response.model';
import { ProductsByCategoryVO } from '../../../model/product/products-by-category-vo.model';
import { ProductVO } from '../../../model/product/product-vo.model';
import { ProductConverterService } from '../../product/converter/product-converter.service';

@Injectable()
export class ProductsHttpConverterService {
  constructor(
    private logger: NGXLogger,
    private productConverterService: ProductConverterService
  ) {}

  convertResponse(response: ProductHttpResponse): ProductsByCategoryVO {
    this.logger.info('[ProductsHttpConverterService] - convertResponse: begin');

    const products: ProductVO[] = [];

    for (const product of response.data) {
      products.push(this.productConverterService.toVO(product));
    }

    return new ProductsByCategoryVO(products);
  }
}
