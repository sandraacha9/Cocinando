import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateComponent } from './private.component';
import { SharedModule } from '../../core/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PrivateComponent],
  exports: [PrivateComponent]
})
export class PrivateModule { }
