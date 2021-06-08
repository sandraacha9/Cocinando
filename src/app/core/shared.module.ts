import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageStorageService } from './services/storage/language/language-storage.service';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { NGX_RESPONSIVE_CONFIG } from './constants/ngx-responsive.constants';
import { ResponsiveModule } from 'ngx-responsive';
import { LoginService } from './services/login/login.service';
import { LoginStorageService } from './services/storage/login/login-storage.service';
import { AppService } from './services/app/app.service';
import { AuthGuardConfirmation } from './services/security/auth-guard-confirmation.service';
import { AuthGuard } from './services/security/auth-guard.service';
import { HttpErrorHandlerService } from './services/http-error-handler/http-error-handler.service';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';
import { TokenService } from './services/token/token.service';
import { TokenStorageService } from './services/storage/token/token-storage.service';
import { CustomerService } from './services/customer/customer.service';
import { CustomerStorageService } from './services/storage/customer/customer-storage.service';
import { AppStorageService } from './services/storage/app/app-storage.service';
import { OrderCartService } from './services/order-cart/order-cart.service';
import { CategoryService } from './services/category/category.service';
import { ProductsService } from './services/products/products.service';
import { ProductDetailsService } from './services/product-details/product-details.service';
import { SidebarService } from './services/sidebar/sidebar.service';
import { OrdersService } from './services/orders/orders.service';

registerLocaleData(localeEs);
registerLocaleData(localeEn);

@NgModule({
  imports: [
    ResponsiveModule.forRoot(NGX_RESPONSIVE_CONFIG)
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DirectivesModule,
    RouterModule,
    ResponsiveModule
  ],
  providers: [
    AuthGuard,
    AuthGuardConfirmation,
    TokenService,
    TokenStorageService,
    LanguageStorageService,
    AppService,
    HttpErrorHandlerService,
    LoginStorageService,
    LoginService,
    CustomerService,
    CustomerStorageService,
    AppStorageService,
    OrderCartService,
    CategoryService,
    ProductsService,
    ProductDetailsService,
    SidebarService,
    OrdersService
  ]
})
export class SharedModule {
  constructor() {
    defineLocale('es', esLocale);
  }
}
