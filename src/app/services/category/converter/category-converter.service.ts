import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { CategoryVO } from '../../../model/category/category-vo.model';
import { CategoryDTO } from '../model/category-dto.model';

@Injectable()
export class CategoryConverterService {
  constructor(private logger: NGXLogger) {}

  toVO(elem: CategoryDTO): CategoryVO {
    const result: CategoryVO = new CategoryVO(
      elem.id,
      elem.name,
      this.subcategoriesToVO(elem.subcategory)
    );
    return result;
  }

  private subcategoriesToVO(subcategories: CategoryDTO[]): CategoryVO[] {
    let result: CategoryVO[] = null;

    if (subcategories != null && subcategories.length > 0) {
      result = subcategories.map(subcat => this.toVO(subcat));
    }

    return result;
  }
}
