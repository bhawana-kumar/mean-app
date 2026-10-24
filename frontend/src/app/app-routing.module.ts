import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from '../Admin/Dashboard/dashboard.component';
import { customerMangementComponent } from '../Admin/customerMangement/cm.component';
import { reportsComponent } from '../Admin/reports/reports.component';
import { userDetailsComponent } from '../Admin/userDetails/userDetails.component';
import { orderManagementComponent } from '../Admin/ordersManagement/ordersManagement.compnent';
import { orderDetailsComponent } from '../Admin/orderDetails/orderDetails.component';
import { DashComponent } from '../Admin/dash/dash.component';
import { vehicleManagementComponent } from '../Admin/vehicleManagement/vehicleManagement.component';
import { vehicleDetailsComponent } from '../Admin/vehicleDetails/vehicleDetails.component';
import { HomeComponent } from '../Home/components/home/home.component';
import { CarsSectionComponent } from '../Home/components/cars-section/cars-section.component';
import { CarfilterComponent } from '../Home/components/cars-section/carfilter/carfilter.component';
import { CarDescComponent } from '../Home/components/cars-section/car-desc/car-desc.component';
import { ReportComponent } from '../Home/components/cars-section/report/report.component';
import { FilteredCarsComponent } from '../Home/components/home/filtered-cars/filtered-cars.component';
import { AdminAuthGuard } from './authguard.guard';
import { PageNotFoundComponent } from '../Home/components/pageNotFound/pageNotFound.component';
import { FetchComponent } from '../fetch/fetch.component';
import { SellerPageComponent } from '../seller-page/seller-page.component';
import { AddComponent } from '../addpage/add.component';
import { EditpageComponent } from '../editpage/editpage.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterpageComponent } from '../registerpage/registerpage.component';
import { YourOrderHistoryComponent } from '../Signup/profile/your-order-history/your-order-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path:'login' , component: LoginPageComponent},
  { path: 'cars', component: CarsSectionComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'yourorderhistory', component: YourOrderHistoryComponent },
  { path: 'carfilter', component: CarfilterComponent },
  { path: 'car-desc/:id', component: CarDescComponent },
  { path: 'recomm-car-desc/:id', component: CarDescComponent },
  { path: 'car-desc/report/:id', component: ReportComponent },
  { path: 'filtered-cars/:brandName', component: FilteredCarsComponent },
  
  // Admin Routes
  { path: 'admin', component: dashboardComponent ,canActivate: [AdminAuthGuard], children: [
      // { path: 'dashboard',redirectTo: '/admin', pathMatch: 'full' },
      { path: '', component: DashComponent },
      { path: 'dashboard', component: DashComponent },
      { path: 'customerManagement', component: customerMangementComponent },
      { path: 'customerManagement/:id', component: userDetailsComponent },
      { path: 'orderManagement', component: orderManagementComponent },
      { path: 'orderManagement/:id', component: orderDetailsComponent },
      { path: 'reports', component: reportsComponent },
      { path: 'vehicleManagement', component: vehicleManagementComponent },
      { path: 'vehicleManagement/:id', component: vehicleDetailsComponent }
    ]
  },
  //seller Routes
  { path:'edit-product/:id' , component: EditpageComponent},
  { path: 'add-vehicle/:id', component: AddComponent},
  { path: 'fetch-vehicle/:id', component: FetchComponent },
  {path:'getSellers/:id', component: SellerPageComponent},
  {path:'logout' , component: HomeComponent},

  //wildcard
  {path: '**',component:PageNotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
