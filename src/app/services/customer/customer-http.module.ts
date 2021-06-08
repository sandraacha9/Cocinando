import { NgModule } from '@angular/core';
import { CustomerHttpService } from './service/customer-http.service';
import { CustomerConverterService } from './converter/customer-converter.service';

@NgModule({
  providers: [CustomerHttpService, CustomerConverterService]
})
export class CustomerHttpModule {}
