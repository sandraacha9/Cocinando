import { NgModule } from '@angular/core';
import { AllergensConverterService } from './allergens/converter/allergens-converter.service';
import { ProductConverterService } from './converter/product-converter.service';

@NgModule({
  providers: [AllergensConverterService, ProductConverterService]
})
export class ProductModule {}
