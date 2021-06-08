import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { LanguageComponent } from './language.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, SharedModule, BsDropdownModule],
  exports: [LanguageComponent, LanguageListComponent],
  declarations: [
    LanguageComponent,
    LanguageListComponent
  ],
  providers: []
})
export class LanguageModule {}
