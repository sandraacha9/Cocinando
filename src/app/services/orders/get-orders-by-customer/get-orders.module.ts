import { NgModule } from '@angular/core';

import { GetOrdersHttpService } from './service/get-orders-http.service';
import { GetOrdersConverterService } from './converter/get-orders-converter.service';

@NgModule({
  providers: [GetOrdersHttpService, GetOrdersConverterService]
})
export class GetOrdersByCustomerModule { }
