import { AppModalErrorService } from './app-modal-error.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModalsService } from './app-modals.service';
import { ModalErrorComponent } from '../../components/modals/modal-error/modal-error.component';
import { ModalActionSuccessComponent } from './../../components/modals/modal-action-success/modal-action-success.component';
import { ModalPrivateComponent } from '../../components/modals/modal-private/modal-private.component';
import { ModalLanguageComponent } from '../../components/modals/modal-language/modal-language.component';
import { ModalMiniCartComponent } from '../../components/modals/modal-mini-cart/modal-mini-cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AppModalsService, AppModalErrorService],
  entryComponents: [
    ModalErrorComponent,
    ModalActionSuccessComponent,
    ModalPrivateComponent,
    ModalLanguageComponent,
    ModalMiniCartComponent
  ]
})
export class AppModalsModule {}
