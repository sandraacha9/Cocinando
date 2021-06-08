import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppModalsModule } from '../../services/app-modals/app-modals.module';
import { LanguageModule } from '../language/language.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppModalsModule,
    LanguageModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  providers: []
})
export class LoginModule {

}
