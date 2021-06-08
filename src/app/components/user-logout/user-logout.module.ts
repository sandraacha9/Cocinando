import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLogoutComponent } from './user-logout.component';
import { SharedModule } from '../../core/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserLogoutComponent],
  exports: [UserLogoutComponent]
})
export class UserLogoutModule { }
