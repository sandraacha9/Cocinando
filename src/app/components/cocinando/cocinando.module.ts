import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared.module';
import { CocinandoComponent } from './cocinando.component';
import { FooterComponent } from './footer/footer.component';
import { UserLogoutModule } from '../user-logout/user-logout.module';
import { CategoryModule } from './category/category.module';
import { FooterModule } from './footer/footer.module';
import { ProductGridMainComponent } from './product-grid-main/product-grid-main.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { LanguageModule } from '../language/language.module';
import { AllergensPanelComponent } from './allergens-panel/allergens-panel.component';
import { AllergensPanelItemComponent } from './allergens-panel-item/allergens-panel-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCartModule } from '../user-cart/user-cart.module';
import { ProductMiniDetailModule } from './product-mini-detail/product-mini-detail.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { HeaderPhoneComponent } from './header-phone/header-phone.component';
import { PrivateZoneModule } from './private-zone/private-zone.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserLogoutModule,
    CategoryModule,
    FooterModule,
    LanguageModule,
    UserCartModule,
    ProductMiniDetailModule,
    PrivateZoneModule
  ],
  declarations: [
    CocinandoComponent,
    ProductGridMainComponent,
    ProductGridComponent,
    ProductDetailComponent,
    AllergensPanelComponent,
    AllergensPanelItemComponent,
    CartComponent,
    CartItemComponent,
    HeaderPhoneComponent
  ],
  exports: [
    CocinandoComponent,
    FooterComponent,
    LanguageModule
  ]
})
export class CocinandoModule { }
