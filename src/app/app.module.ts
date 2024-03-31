import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrandAddComponent } from './components/admin/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/admin/brand/brand-list/brand-list.component';
import { BrandRemoveComponent } from './components/admin/brand/brand-remove/brand-remove.component';
import { BrandUpdateComponent } from './components/admin/brand/brand-update/brand-update.component';
import { BrandViewComponent } from './components/admin/brand/brand-view/brand-view.component';
import { CarAddComponent } from './components/admin/car/car-add/car-add.component';
import { CarListComponent } from './components/admin/car/car-list/car-list.component';
import { CarRemoveComponent } from './components/admin/car/car-remove/car-remove.component';
import { CarUpdateComponent } from './components/admin/car/car-update/car-update.component';
import { CarViewComponent } from './components/admin/car/car-view/car-view.component';
import { CarImageAddComponent } from './components/admin/carImage/car-image-add/car-image-add.component';
import { CarImageListComponent } from './components/admin/carImage/car-image-list/car-image-list.component';
import { CarImageRemoveComponent } from './components/admin/carImage/car-image-remove/car-image-remove.component';
import { CarImageUpdateComponent } from './components/admin/carImage/car-image-update/car-image-update.component';
import { CarImageViewComponent } from './components/admin/carImage/car-image-view/car-image-view.component';
import { ColorAddComponent } from './components/admin/color/color-add/color-add.component';
import { ColorListComponent } from './components/admin/color/color-list/color-list.component';
import { ColorRemoveComponent } from './components/admin/color/color-remove/color-remove.component';
import { ColorUpdateComponent } from './components/admin/color/color-update/color-update.component';
import { ColorViewComponent } from './components/admin/color/color-view/color-view.component';
import { CustomerAddComponent } from './components/admin/customer/customer-add/customer-add.component';
import { CustomerListComponent } from './components/admin/customer/customer-list/customer-list.component';
import { CustomerRemoveComponent } from './components/admin/customer/customer-remove/customer-remove.component';
import { CustomerUpdateComponent } from './components/admin/customer/customer-update/customer-update.component';
import { CustomerViewComponent } from './components/admin/customer/customer-view/customer-view.component';
import { ModelAddComponent } from './components/admin/model/model-add/model-add.component';
import { ModelListComponent } from './components/admin/model/model-list/model-list.component';
import { ModelRemoveComponent } from './components/admin/model/model-remove/model-remove.component';
import { ModelUpdateComponent } from './components/admin/model/model-update/model-update.component';
import { ModelViewComponent } from './components/admin/model/model-view/model-view.component';
import { ModelColorAddComponent } from './components/admin/modelColor/model-color-add/model-color-add.component';
import { ModelColorListComponent } from './components/admin/modelColor/model-color-list/model-color-list.component';
import { ModelColorRemoveComponent } from './components/admin/modelColor/model-color-remove/model-color-remove.component';
import { ModelColorUpdateComponent } from './components/admin/modelColor/model-color-update/model-color-update.component';
import { ModelColorViewComponent } from './components/admin/modelColor/model-color-view/model-color-view.component';
import { OperationClaimAddComponent } from './components/admin/operationClaim/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/admin/operationClaim/operation-claim-list/operation-claim-list.component';
import { OperationClaimRemoveComponent } from './components/admin/operationClaim/operation-claim-remove/operation-claim-remove.component';
import { OperationClaimUpdateComponent } from './components/admin/operationClaim/operation-claim-update/operation-claim-update.component';
import { OperationClaimViewComponent } from './components/admin/operationClaim/operation-claim-view/operation-claim-view.component';
import { RentalAddComponent } from './components/admin/rental/rental-add/rental-add.component';
import { RentalListComponent } from './components/admin/rental/rental-list/rental-list.component';
import { RentalRemoveComponent } from './components/admin/rental/rental-remove/rental-remove.component';
import { RentalUpdateComponent } from './components/admin/rental/rental-update/rental-update.component';
import { RentalViewComponent } from './components/admin/rental/rental-view/rental-view.component';
import { UserOperationClaimAddComponent } from './components/admin/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/admin/user-operation-claim/user-operation-claim-list/user-operation-claim-list.component';
import { UserOperationClaimRemoveComponent } from './components/admin/user-operation-claim/user-operation-claim-remove/user-operation-claim-remove.component';
import { UserOperationClaimUpdateComponent } from './components/admin/user-operation-claim/user-operation-claim-update/user-operation-claim-update.component';
import { UserOperationClaimViewComponent } from './components/admin/user-operation-claim/user-operation-claim-view/user-operation-claim-view.component';
import { UserAddComponent } from './components/admin/user/user-add/user-add.component';
import { UserListComponent } from './components/admin/user/user-list/user-list.component';
import { UserRemoveComponent } from './components/admin/user/user-remove/user-remove.component';
import { UserUpdateComponent } from './components/admin/user/user-update/user-update.component';
import { UserViewComponent } from './components/admin/user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
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
    SiteNavbarComponent,
    BrandAddComponent,
    BrandListComponent,
    BrandRemoveComponent,
    BrandUpdateComponent,
    BrandViewComponent,
    CarAddComponent,
    CarListComponent,
    CarRemoveComponent,
    CarUpdateComponent,
    CarViewComponent,
    CarImageAddComponent,
    CarImageListComponent,
    CarImageRemoveComponent,
    CarImageUpdateComponent,
    CarImageViewComponent,
    ColorAddComponent,
    ColorListComponent,
    ColorRemoveComponent,
    ColorUpdateComponent,
    ColorViewComponent,
    CustomerAddComponent,
    CustomerListComponent,
    CustomerRemoveComponent,
    CustomerUpdateComponent,
    CustomerViewComponent,
    ModelAddComponent,
    ModelListComponent,
    ModelRemoveComponent,
    ModelUpdateComponent,
    ModelViewComponent,
    ModelColorAddComponent,
    ModelColorListComponent,
    ModelColorRemoveComponent,
    ModelColorUpdateComponent,
    ModelColorViewComponent,
    OperationClaimAddComponent,
    OperationClaimListComponent,
    OperationClaimRemoveComponent,
    OperationClaimUpdateComponent,
    OperationClaimViewComponent,
    RentalAddComponent,
    RentalListComponent,
    RentalRemoveComponent,
    RentalUpdateComponent,
    RentalViewComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimListComponent,
    UserOperationClaimRemoveComponent,
    UserOperationClaimUpdateComponent,
    UserOperationClaimViewComponent,
    UserAddComponent,
    UserListComponent,
    UserRemoveComponent,
    UserUpdateComponent,
    UserViewComponent
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
