import { NgModule } from '@angular/core';

import { ProductHttpService } from './service/product-http.service';
import { ProductsHttpConverterService } from './converter/products-http-converter.service';

@NgModule({
  providers: [ProductHttpService, ProductsHttpConverterService]
})
export class ProductsModule {}
