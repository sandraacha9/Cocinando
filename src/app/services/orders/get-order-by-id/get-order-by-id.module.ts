import { NgModule } from '@angular/core';

import { GetOrderByIdConverterService } from './converter/get-order-by-id-converter.service';
import { GetOrderByIdHttpService } from './service/get-order-by-id-http.service';

@NgModule({
  providers: [GetOrderByIdHttpService, GetOrderByIdConverterService]
})
export class GetOrderByIdModule { }
