import { NgModule } from '@angular/core';
import { CreateOrderModule } from './create-order/create-order.module';
import { OrderItemAddModule } from './order-item-add/order-item-add.module';
import { OrderConverterService } from './order/converter/order-converter.service';
import { OrderItemConverterService } from './order-item/converter/order-item-converter.service';
import { GetOrderByIdModule } from './get-order-by-id/get-order-by-id.module';
import { GetOrdersByCustomerModule } from './get-orders-by-customer/get-orders.module';

@NgModule({
  exports: [
    CreateOrderModule,
    OrderItemAddModule,
    GetOrderByIdModule,
    GetOrdersByCustomerModule
  ],
  providers: [OrderConverterService, OrderItemConverterService]
})
export class OrdersModule {}
