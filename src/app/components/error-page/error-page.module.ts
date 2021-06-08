import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { ErrorPageComponent } from './error-page.component';
import { LanguageModule } from '../language/language.module';
import { FooterModule } from '../cocinando/footer/footer.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, LanguageModule, FooterModule
  ],
  exports: [ErrorPageComponent],
  declarations: [ErrorPageComponent]
})
export class ErrorPageModule { }
