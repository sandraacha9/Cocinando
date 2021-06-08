import { SharedModule } from './../core/shared.module';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { ModalsModule } from './modals/modals.module';
import { PrivateModule } from './private/private.module';
import { CocinandoModule } from './cocinando/cocinando.module';
import { LanguageModule } from './language/language.module';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';
import { UserCartModule } from './user-cart/user-cart.module';
import { LegalInfoModule } from './legal-info/legal-info.module';
import { ErrorPageModule } from './error-page/error-page.module';

@NgModule({
  imports: [
    LoginModule,
    ModalsModule,
    PrivateModule,
    CocinandoModule,
    LanguageModule,
    BsDatepickerModule,
    UserCartModule,
    LegalInfoModule,
    ErrorPageModule
  ],
  exports: [LegalInfoModule],
  providers: [],
  declarations: []
})
export class ComponentModule {}