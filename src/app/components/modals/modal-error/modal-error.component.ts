import { ErrorVO } from './../../../model/exceptions/error-vo.model';
import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent implements OnInit {
  error: ErrorVO;
  onClose: Function;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  close() {
    if (this.onClose) {
      this.onClose();
    }
    this.bsModalRef.hide();
  }

  setError(error: ErrorVO) {
    this.error = error;
  }
}
