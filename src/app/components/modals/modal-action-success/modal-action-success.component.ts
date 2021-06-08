import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CustomModalMessageVO } from './../../../model/messages/custom-modal-message-vo.model';

@Component({
  selector: 'app-modal-action-success',
  templateUrl: './modal-action-success.component.html',
  styleUrls: ['./modal-action-success.component.scss']
})
export class ModalActionSuccessComponent implements OnInit {
  message: CustomModalMessageVO;
  onAccept: Function;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {}

  close() {
    this.bsModalRef.hide();
    if (this.onAccept) {
      this.onAccept();
    }
  }
}
