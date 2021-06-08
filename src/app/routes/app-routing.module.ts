import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../core/services/security/auth-guard.service';
import { CocinandoComponent } from '../components/cocinando/cocinando.component';
import { CategoryHandlerComponent } from '../components/cocinando/category/category-handler/category-handler.component';
import { ProductGridMainComponent } from '../components/cocinando/product-grid-main/product-grid-main.component';
import { ProductDetailComponent } from '../components/cocinando/product-detail/product-detail.component';
import { CartComponent } from '../components/cocinando/cart/cart.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { InfoLegalComponent } from '../components/legal-info/info/info-legal/info-legal.component';
import { PrivateZoneDetailsComponent } from '../components/cocinando/private-zone/private-zone-details/private-zone-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'legal-info', component: InfoLegalComponent },
  { path: 'cocinando', component: CocinandoComponent,
    children: [
      { path: '', component: CategoryHandlerComponent },
      { path: 'category/:categoryId', component: ProductGridMainComponent},
      { path: 'category/:categoryId/product-details/:productId', component: ProductDetailComponent},
      { path: 'cart', component: CartComponent},
      { path: 'private-zone', component: PrivateZoneDetailsComponent},
      { path: 'private-zone/order/:orderId', component: PrivateZoneDetailsComponent}
    ]
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
