import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpRestModule } from './http-rest/http-rest.module';
import { LoginHttpModule } from './login/login-http.module';
import { TokenModule } from './auth/token/token.module';
import { UserAgentModule } from './user-agent/user-agent.module';
import { AppModalsModule } from './app-modals/app-modals.module';
import { CustomerHttpModule } from './customer/customer-http.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { ProductDetailsModule } from './product-details/product-details.module';

@NgModule({
  imports: [],
  exports: [
    HttpRestModule,
    LoginHttpModule,
    TokenModule,
    UserAgentModule,
    CustomerHttpModule,
    AppModalsModule,
    ProductModule,
    OrdersModule,
    CategoryModule,
    ProductsModule,
    ProductDetailsModule
  ],
  declarations: [],
  providers: [DatePipe]
})
export class ServiceModule {}
