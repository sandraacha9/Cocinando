import { NgModule } from '@angular/core';
import { CategoryGetHttpService } from './service/category-get-http.service';
import { CategoryHttpConverterService } from './converter/category-http-converter.service';
import { CategoryConverterService } from './converter/category-converter.service';

@NgModule({
  providers: [CategoryGetHttpService, CategoryHttpConverterService, CategoryConverterService]
})
export class CategoryModule {}
