import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { UserCartComponent } from './user-cart.component';
import { ProductMiniDetailModule } from '../cocinando/product-mini-detail/product-mini-detail.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule,
    ProductMiniDetailModule
  ],
  declarations: [UserCartComponent, MiniCartComponent],
  exports: [UserCartComponent, MiniCartComponent]
})
export class UserCartModule { }
