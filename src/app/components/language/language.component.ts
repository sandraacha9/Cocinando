import { Component, OnInit, Input } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { AppModalsService } from '../../services/app-modals/app-modals.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  public currentLang: string;

  constructor(
    private translate: TranslateService,
    private logger: NGXLogger,
    private appModals: AppModalsService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });
  }

  openLanguage() {
    this.appModals.openLanguage();
    this.sidebarService.setSidebarVisibility(false);
  }
}
