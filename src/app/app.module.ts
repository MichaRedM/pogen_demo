import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PopupComponent } from './components/popup/popup.component';
import { OrderComponent } from './components/order/order.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { CardService } from './card.service';
import { LoginComponent } from './components/login/login.component';
import { SizeComponent } from './components/size/size.component';
import { SizeService } from './size.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PopupComponent,
    OrderComponent,
    MenuComponent,
    CartComponent,
    ProductsComponent,
    ProductComponent,
    LoginComponent,
    SizeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'size',
        component: SizeComponent,
      }
    ]),
  ],
  providers: [
    CardService,
    SizeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
