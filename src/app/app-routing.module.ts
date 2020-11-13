import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './users/customers/customers.component';
import { TradersComponent } from './users/traders/traders.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { TraderComponent } from './single-user/trader/trader.component';
import { CustomerComponent } from './single-user/customer/customer.component';
import { SupportComponent } from './support/support.component';
import { FqComponent } from './support/fq/fq.component';
import { SupportMessagesComponent } from './support/support-messages/support-messages.component';
import { SuggestComponent } from './support/suggest/suggest.component';
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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'main', component: DashboardComponent, pathMatch: 'full'},

  {path: 'Users', component: UsersComponent,
  children: [
    {path: 'customers', component: CustomersComponent, pathMatch: 'full'},
    {path: 'traders', component: TradersComponent, pathMatch: 'full'},
    {path: 'search-user', component: FilteredUserComponent, pathMatch: 'full'}
  ]},

  {path: 'singleUser', component: SingleUserComponent,
    children: [
      {path: 'trader/:id', component: TraderComponent, pathMatch: 'full'},
      {path: 'customer/:id', component: CustomerComponent, pathMatch: 'full'},
      {path: 'send-notification/:userType/:id', component: SendNotificationComponent, pathMatch: 'full'},
      {path: 'send-notification-all/:userType', component: SendNotificationComponent, pathMatch: 'full'}
  ]},

  {path: 'support', component: SupportComponent,
    children: [
      {path: 'fq', component: FqComponent, pathMatch: 'full'},
      {path: 'support-messages', component: SupportMessagesComponent, pathMatch: 'full'},
      {path: 'suggest', component: SuggestComponent, pathMatch: 'full'}
  ]},

  {path: 'market', component: MarketComponent,
    children: [
      {path: 'categories', component: CategoryComponent,
        children: [
          {path: 'allCategory', component: AllCategoryComponent, pathMatch: 'full'},
          {path: 'createNewCategory', component: AddNewCategoryComponent, pathMatch: 'full'},
          {path: 'editCategory/:id', component: EditCategoryComponent, pathMatch: 'full'}
      ]},
      {path: 'services', component: ServiceComponent,
        children: [
          {path: 'all-services', component: AllServicesComponent, pathMatch: 'full'},
          {path: 'createNewService', component: AddNewServiceComponent, pathMatch: 'full'},
          {path: 'editService/:id', component: EditServiceComponent, pathMatch: 'full'}
      ]},
      {path: 'ads', component: AdsComponent,
        children: [
          {path: 'all-ads', component: AllAdsComponent, pathMatch: 'full'},
          {path: 'ads-requested-details/:id', component: AdsRequestedDetailsComponent, pathMatch: 'full'},
          {path: 'requested-ads', component: RequestedADSComponent, pathMatch: 'full'},
          {path: 'ads-details/:id', component: AdsDetailsComponent, pathMatch: 'full'}
      ]},
      {path: 'topViews', component: TopViewComponent,
      children: [
        {path: 'allTopViews', component: AllTopViewsComponent, pathMatch: 'full'}
      ]},
      {path: 'search', component: MarketSearchComponent, pathMatch: 'full'}
  ]},

  {path: 'bookingOperations', component: BookingOperationsComponent,
    children: [
      {path: 'allBooking', component: AllBookingComponent, pathMatch: 'full'},
      {path: 'singleBooking/:id', component: SingleBookingComponent, pathMatch: 'full'}
    ]
  },

  {path: 'shop', component: ShopComponent,
    children: [
      {path: 'products', component: ProductsComponent,
        children: [
          {path: 'all-products', component: AllProductsComponent, pathMatch: 'full'},
          {path: 'single-product/:id', component: SingleProductComponent, pathMatch: 'full'},
          {path: 'create-product', component: CreateComponent, pathMatch: 'full'},
          {path: 'edit-product/:id', component: UpdateComponent, pathMatch: 'full'}
      ]},
      {path: 'cities', component: CitiesComponent,
        children: [
          {path: 'all-citites', component: AllCitiesComponent, pathMatch: 'full'},
          {path: 'create-city', component: CreateCityComponent, pathMatch: 'full'}
      ]},
      {path: 'promos', component: PromosComponent,
        children: [
          {path: 'all-promos', component: AllPromoaComponent, pathMatch: 'full'},
          {path: 'create-promo', component: CreatePromoComponent, pathMatch: 'full'},
          {path: 'update-promo/:id', component: EditPromoComponent, pathMatch: 'full'}
      ]},
      {path: 'orders', component: OrdersComponent,
        children: [
          {path: 'all-orders', component: AllOrdersComponent, pathMatch: 'full'},
          {path: 'single-order/:id', component: SingleOrderComponent, pathMatch: 'full'}
      ]},
      {path: 'categories', component: ShopCategoryComponent, pathMatch: 'full'},
      {path: 'search', component: ShopSearchComponent, pathMatch: 'full'}
  ]},

  {path: 'policy', component: PolicyComponent,
    children: [
      {path: 'all-policy', component: AllPoliciesComponent, pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
