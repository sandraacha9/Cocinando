import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared.module';
import { ProductMiniDetailComponent } from './product-mini-detail.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [ProductMiniDetailComponent],
  exports: [ProductMiniDetailComponent]
})
export class ProductMiniDetailModule { }
