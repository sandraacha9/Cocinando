import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { APP_CONSTANST } from '../../../constants/app.constants';

@Injectable()
export class LanguageStorageService {

  constructor(private logger: NGXLogger) { }

  getLanguage(): string {
    const val = localStorage.getItem(APP_CONSTANST.local_storage.language);
    this.logger.trace(`[LanguageStorageService] - getLanguage [${val}]`);

    return val;
  }

  setLanguage(language: string) {
    const val = language;
    this.logger.trace(`[LanguageStorageService] - setLanguage [${val}]`);
    localStorage.setItem(APP_CONSTANST.local_storage.language, val);
  }

  exists(): boolean {
    const exist: boolean =
      localStorage.getItem(APP_CONSTANST.local_storage.language) !== null &&
      APP_CONSTANST.local_storage.language !== undefined;

    return exist;
  }
}
