import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { NGXLogger } from 'ngx-logger';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-language',
  templateUrl: './modal-language.component.html',
  styleUrls: ['./modal-language.component.scss']
})
export class ModalLanguageComponent implements OnInit {

  switchCallback: any;
  public currentLang: string;

  constructor(
    private logger: NGXLogger,
    private bsModalRef: BsModalRef,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });
  }

  close() {
    this.bsModalRef.hide();
  }

  onSwitch(): void {
    this.logger.trace(['[ModalLanguage] onSwitch']);
    this.bsModalRef.hide();
    if (typeof this.switchCallback === 'function') {
      this.switchCallback();
    }
  }
}
