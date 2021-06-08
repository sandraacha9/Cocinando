import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { AllergensDTO } from '../model/allergens-dto.model';
import { AllergensVO } from '../../../../model/product/allergens/allergens-vo.model';

@Injectable()
export class AllergensConverterService {
  constructor(private logger: NGXLogger) {}

  toVO(elem: Array<AllergensDTO>): Array<AllergensVO> {
    return elem !== undefined ? elem.map(allergen => this.elementToVO(allergen)) : undefined;
  }

  elementToVO = (elem: AllergensDTO): AllergensVO => {
    return new AllergensVO(elem.name, elem.description);
  }
}
