import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-modal-private',
  templateUrl: './modal-private.component.html',
  styleUrls: ['./modal-private.component.scss']
})
export class ModalPrivateComponent implements OnInit {
  
  constructor(
    private logger: NGXLogger,
    private bsModalRef: BsModalRef,
    private router: Router
  ) {}

  onCancel(): void {
    this.bsModalRef.hide();
  }

  onHide(): void {
    this.bsModalRef.hide();
  }

  ngOnInit() {}
}
