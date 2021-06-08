import { Injectable, Host } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalErrorComponent } from '../../components/modals/modal-error/modal-error.component';
import { ErrorVO } from './../../model/exceptions/error-vo.model';
import { CustomModalMessageVO } from '../../model/messages/custom-modal-message-vo.model';
import { UserAgentService } from '../user-agent/user-agent.service';
import { ModalActionSuccessComponent } from '../../components/modals/modal-action-success/modal-action-success.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class AppModalErrorService {
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
    private userAgentService: UserAgentService) {}

  openModalError(error: ErrorVO, onClose?: Function): void {
    const bsModalRef = this.modalService.show(
      ModalErrorComponent,
      Object.assign({}, this.modalConfig, {
        class: 'app-modal-sm'
      })
    );
    (<ModalErrorComponent>bsModalRef.content).error = error;
    (<ModalErrorComponent>bsModalRef.content).onClose = onClose;
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

}
