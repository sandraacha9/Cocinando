import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

import { CategoryVO } from './../../../model/category/category-vo.model';
import { CategoryConverterService } from './category-converter.service';
import { CategoryDTO } from '../model/category-dto.model';

@Injectable()
export class CategoryHttpConverterService {
  constructor(
    private logger: NGXLogger,
    private converter: CategoryConverterService
  ) {}

  convertResponse(response: CategoryDTO[]): CategoryVO[] {
    this.logger.info('[CategoryHttpConverterService] - convertResponse: begin');
    const result: CategoryVO[] = response.map(elem =>
      this.converter.toVO(elem)
    );
    // this.logger.trace(
    //   `[CategoryHttpConverterService] - convertResponse [${JSON.stringify(
    //     result
    //   )}]`
    // );
    return result;
  }
}
