import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalActionSuccessComponent } from './modal-action-success/modal-action-success.component';
import { ModalPrivateComponent } from './modal-private/modal-private.component';
import { PrivateModule } from '../private/private.module';
import { ModalLanguageComponent } from './modal-language/modal-language.component';
import { ModalMiniCartComponent } from './modal-mini-cart/modal-mini-cart.component';
import { LanguageModule } from '../language/language.module';
import { UserCartModule } from '../user-cart/user-cart.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrivateModule,
    LanguageModule,
    UserCartModule
  ],
  exports: [
    ModalErrorComponent,
    ModalActionSuccessComponent,
    ModalPrivateComponent,
    ModalLanguageComponent,
    ModalMiniCartComponent
  ],
  declarations: [
    ModalErrorComponent,
    ModalActionSuccessComponent,
    ModalPrivateComponent,
    ModalLanguageComponent,
    ModalMiniCartComponent
  ]
})
export class ModalsModule {}
