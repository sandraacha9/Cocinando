import { NgModule } from '@angular/core';

import { ProductDetailsHttpService } from './service/product-details-http.service';
import { ProductDetailsHttpConverterService } from './converter/product-details-http-converter.service';

@NgModule({
  providers: [ProductDetailsHttpService, ProductDetailsHttpConverterService]
})
export class ProductDetailsModule {}
