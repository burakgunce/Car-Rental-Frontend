import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { BrandComponent } from './components/brand/brand.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CarImageComponent } from './components/admin/car-image/car-image.component';
import { ColorComponent } from './components/admin/color/color.component';
import { CustomerComponent } from './components/admin/customer/customer.component';
import { ModelComponent } from './components/admin/model/model.component';
import { ModelColorComponent } from './components/admin/model-color/model-color.component';
import { OperationClaimComponent } from './components/admin/operation-claim/operation-claim.component';
import { RentalComponent } from './components/admin/rental/rental.component';
import { UserOperationClaimComponent } from './components/admin/user-operation-claim/user-operation-claim.component';
import { UserComponent } from './components/admin/user/user.component';
import { CardItemsComponent } from './components/home/card-items/card-items.component';
import { HomeLayoutComponent } from './components/home/home-layout/home-layout.component';
import { LastRentalListComponent } from './components/home/last-rental-list/last-rental-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarDetailFilterComponent } from './components/site/car-detail-filter/car-detail-filter.component';
import { CarDetailMenuComponent } from './components/site/car-detail-menu/car-detail-menu.component';
import { CarDetailPageComponent } from './components/site/car-detail-page/car-detail-page.component';
import { RentThisCarComponent } from './components/site/rent-this-car/rent-this-car.component';
import { RentalDetailHistoryComponent } from './components/site/rental-detail-history/rental-detail-history.component';
import { SiteLayoutComponent } from './components/site/site-layout/site-layout.component';
import { SiteNavbarComponent } from './components/site/site-navbar/site-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AdminDashboardComponent,
    BrandComponent,
    AdminLayoutComponent,
    CarImageComponent,
    ColorComponent,
    CustomerComponent,
    ModelComponent,
    ModelColorComponent,
    OperationClaimComponent,
    RentalComponent,
    UserOperationClaimComponent,
    UserComponent,
    CardItemsComponent,
    HomeLayoutComponent,
    LastRentalListComponent,
    LoginComponent,
    RegisterComponent,
    CarDetailFilterComponent,
    CarDetailMenuComponent,
    CarDetailPageComponent,
    RentThisCarComponent,
    RentalDetailHistoryComponent,
    SiteLayoutComponent,
    SiteNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
