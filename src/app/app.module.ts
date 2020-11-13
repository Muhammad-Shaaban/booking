import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { UsersService } from './shared/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradersComponent } from './users/traders/traders.component';
import { CustomersComponent } from './users/customers/customers.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { TraderComponent } from './single-user/trader/trader.component';
import { CustomerComponent } from './single-user/customer/customer.component';
import { SupportComponent } from './support/support.component';
import { SuggestComponent } from './support/suggest/suggest.component';
import { SupportMessagesComponent } from './support/support-messages/support-messages.component';
import { FqComponent } from './support/fq/fq.component';
import { MarketComponent } from './market/market.component';
import { CategoryComponent } from './market/category/category.component';
import { AddNewCategoryComponent } from './market/category/add-new-category/add-new-category.component';
import { AllCategoryComponent } from './market/category/all-category/all-category.component';
import { EditCategoryComponent } from './market/category/edit-category/edit-category.component';
import { ServiceComponent } from './market/service/service.component';
import { AllServicesComponent } from './market/service/all-services/all-services.component';
import { AddNewServiceComponent } from './market/service/add-new-service/add-new-service.component';
import { EditServiceComponent } from './market/service/edit-service/edit-service.component';
import { AdsComponent } from './market/ads/ads.component';
import { AllAdsComponent } from './market/ads/all-ads/all-ads.component';
import { AdsDetailsComponent } from './market/ads/ads-details/ads-details.component';
import { TopViewComponent } from './market/top-view/top-view.component';
import { AllTopViewsComponent } from './market/top-view/all-top-views/all-top-views.component';
import { BookingOperationsComponent } from './booking-operations/booking-operations.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/Products/Products.component';
import { AllProductsComponent } from './shop/Products/all-products/all-products.component';
import { SingleProductComponent } from './shop/products/single-product/single-product.component';
import { CreateComponent } from './shop/products/create/create.component';
import { UpdateComponent } from './shop/products/update/update.component';
import { CitiesComponent } from './shop/cities/cities.component';
import { AllCitiesComponent } from './shop/cities/all-cities/all-cities.component';
import { CreateCityComponent } from './shop/cities/create-city/create-city.component';
import { PromosComponent } from './shop/promos/promos.component';
import { AllPromoaComponent } from './shop/promos/all-promoa/all-promoa.component';
import { CreatePromoComponent } from './shop/promos/create-promo/create-promo.component';
import { EditPromoComponent } from './shop/promos/edit-promo/edit-promo.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AllBookingComponent } from './booking-operations/all-booking/all-booking.component';
import { SingleBookingComponent } from './booking-operations/single-booking/single-booking.component';
import { ShopSearchComponent } from './shop/shop-search/shop-search.component';
import { MarketSearchComponent } from './market/market-search/market-search.component';
import { SendNotificationComponent } from './single-user/send-notification/send-notification.component';
import { ShopCategoryComponent } from './shop/shop-category/shop-category.component';
import { FilteredUserComponent } from './users/filtered-user/filtered-user.component';
import { OrdersComponent } from './shop/orders/orders.component';
import { AllOrdersComponent } from './shop/orders/all-orders/all-orders.component';
import { SingleOrderComponent } from './shop/orders/single-order/single-order.component';
import { PolicyComponent } from './policy/policy.component';
import { AllPoliciesComponent } from './policy/all-policies/all-policies.component';
import { RequestedADSComponent } from './market/ads/requested-ads/requested-ads.component';
import { AdsRequestedDetailsComponent } from './market/ads/ads-requested-details/ads-requested-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    DashboardComponent,
    TradersComponent,
    CustomersComponent,
    SingleUserComponent,
    TraderComponent,
    CustomerComponent,
    SupportComponent,
    SuggestComponent,
    SupportMessagesComponent,
    FqComponent,
    MarketComponent,
    CategoryComponent,
    AddNewCategoryComponent,
    AllCategoryComponent,
    EditCategoryComponent,
    ServiceComponent,
    AllServicesComponent,
    AddNewServiceComponent,
    EditServiceComponent,
    AdsComponent,
    AllAdsComponent,
    AdsDetailsComponent,
    TopViewComponent,
    AllTopViewsComponent,
    BookingOperationsComponent,
    ShopComponent,
    ProductsComponent,
    AllProductsComponent,
    SingleProductComponent,
    CreateComponent,
    UpdateComponent,
    CitiesComponent,
    AllCitiesComponent,
    CreateCityComponent,
    PromosComponent,
    AllPromoaComponent,
    CreatePromoComponent,
    EditPromoComponent,
    AllBookingComponent,
    SingleBookingComponent,
    ShopSearchComponent,
    MarketSearchComponent,
    SendNotificationComponent,
    ShopCategoryComponent,
    FilteredUserComponent,
    OrdersComponent,
    AllOrdersComponent,
    SingleOrderComponent,
    PolicyComponent,
    AllPoliciesComponent,
    RequestedADSComponent,
    AdsRequestedDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

