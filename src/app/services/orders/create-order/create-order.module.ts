import { NgModule } from '@angular/core';
import { CreateOrderHttpService } from './service/create-order-http.service';
import { CreateOrderConverterService } from './converter/create-order-converter.service';

@NgModule({
  providers: [CreateOrderHttpService, CreateOrderConverterService]
})
export class CreateOrderModule { }
