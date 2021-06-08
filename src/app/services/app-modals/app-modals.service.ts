import { ModalActionSuccessComponent } from './../../components/modals/modal-action-success/modal-action-success.component';
import { Injectable, Host } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


import { CustomModalMessageVO } from './../../model/messages/custom-modal-message-vo.model';
import { ErrorVO } from './../../model/exceptions/error-vo.model';
import { UserAgentService } from '../user-agent/user-agent.service';
import { ModalPrivateComponent } from '../../components/modals/modal-private/modal-private.component';
import { ModalLanguageComponent } from '../../components/modals/modal-language/modal-language.component';
import { ModalMiniCartComponent } from '../../components/modals/modal-mini-cart/modal-mini-cart.component';

@Injectable()
export class AppModalsService {
  bsModalRef: BsModalRef;
  modalConfig = Object.assign(
    {
      class: this.userAgentService.userAgentClass() + ' '
    },
    {
      animated: true,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    }
  );

  constructor(
    private modalService: BsModalService,
    private userAgentService: UserAgentService
  ) {}

  openPrivate(): void {
    const bsModalRef = this.modalService.show(
      ModalPrivateComponent,
      Object.assign({}, this.modalConfig, {
        class: this.modalConfig.class
      })
    );
  }

  openActionSuccessModal(message: CustomModalMessageVO, onAccept?: Function) {
    const bsModalRef = this.modalService.show(
      ModalActionSuccessComponent,
      Object.assign({}, this.modalConfig, {
        class: this.modalConfig.class + 'app-modal-sm'
      })
    );
    (<ModalActionSuccessComponent>bsModalRef.content).message = message;
    (<ModalActionSuccessComponent>bsModalRef.content).onAccept = onAccept;
  }

  openMiniCart(): void {
    const bsModalRef = this.modalService.show(
      ModalMiniCartComponent,
      Object.assign({}, this.modalConfig, {
        class: this.modalConfig.class
      })
    );
  }

  openLanguage(switchCallback?): void {
    const bsModalRef = this.modalService.show(
      ModalLanguageComponent,
      Object.assign({}, this.modalConfig, {
        class: this.modalConfig.class + 'modal-lg',
        ignoreBackdropClick: false
      })
    );
    (<ModalLanguageComponent>bsModalRef.content).switchCallback = switchCallback;
  }
}
