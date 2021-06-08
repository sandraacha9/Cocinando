import { ProductVO } from './../../../model/product/product-vo.model';
import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { ProductConverterService } from '../../product/converter/product-converter.service';
import { ProductDTO } from '../../product/model/product-dto.model';

@Injectable()
export class ProductDetailsHttpConverterService {
  constructor(
    private logger: NGXLogger,
    private productConverterService: ProductConverterService
  ) {}

  convertResponse(response: ProductDTO): ProductVO {
    this.logger.info('[ProductDetailsHttpConverterService] - convertResponse: begin');
    return this.productConverterService.toVO(response);
  }
}
