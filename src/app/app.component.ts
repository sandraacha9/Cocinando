import { Component } from "@angular/core";
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageStorageService } from "./core/services/storage/language/language-storage.service";
import { NGXLogger } from "ngx-logger";
import { TokenVO } from "./model/auth/token/token-vo.model";
import { TokenStorageService } from "./core/services/storage/token/token-storage.service";
import { APP_CONSTANST } from "./core/constants/app.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private logger: NGXLogger,
    private translate: TranslateService,
    private router: Router,
    private languageStorage: LanguageStorageService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const lang = this.languageStorage.exists()
      ? this.languageStorage.getLanguage()
      : 'es';
    translate.use(lang);
    this.languageStorage.setLanguage(lang);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
