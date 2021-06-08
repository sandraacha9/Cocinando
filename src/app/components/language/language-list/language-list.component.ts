import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { APP_CONSTANST } from '../../../core/constants/app.constants';
import { AppStorageService } from '../../../core/services/storage/app/app-storage.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  @Input() currentLang: string;
  @Output('switchEvent') switchEvent = new EventEmitter();

  public languages: string[] = APP_CONSTANST.languages;

  constructor(
    private translate: TranslateService,
    private appStorageService: AppStorageService,
    private logger: NGXLogger) { }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.logger.trace(`[LanguageComponent] - switchLanguage [${language}]`);
    this.translate.use(language);
    this.appStorageService.setLanguage(language);
    this.switchEvent.emit();
  }
}
