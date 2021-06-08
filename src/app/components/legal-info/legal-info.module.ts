import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { LegalInfoSidebarPhoneComponent } from './legal-info-sidebar-phone/legal-info-sidebar-phone.component';
import { LegalInfoHeaderPhoneComponent } from './legal-info-header-phone/legal-info-header-phone.component';
import { LanguageModule } from '../language/language.module';
import { InfoMenuComponent } from './info/info-menu/info-menu.component';
import { InfoPanelComponent } from './info/info-panel/info-panel.component';
import { InfoLegalComponent } from './info/info-legal/info-legal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LanguageModule
  ],
  declarations: [
    InfoPanelComponent,
    InfoLegalComponent,
    InfoMenuComponent,
    LegalInfoSidebarPhoneComponent,
    LegalInfoHeaderPhoneComponent
  ],
  exports: [
    InfoPanelComponent,
    InfoLegalComponent
  ]
})
export class LegalInfoModule { }
