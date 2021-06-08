import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared.module';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { CategoryHandlerComponent } from './category-handler/category-handler.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CategorySelectorComponent, CategoryHandlerComponent],
  exports: [CategorySelectorComponent, CategoryHandlerComponent]
})
export class CategoryModule { }
