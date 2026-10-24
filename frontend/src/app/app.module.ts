import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { adminModule } from '../Admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarDescComponent } from '../Home/components/cars-section/car-desc/car-desc.component';
import { HomeModule } from '../Home/home.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signupModule } from '../Signup/signup.module';
import {VehicleModule} from '../vehicle/vehicle.module'
import { SellerPageComponent } from '../seller-page/seller-page.component';
import { FetchComponent } from '../fetch/fetch.component';
import { EditpageComponent } from '../editpage/editpage.component';
import { RouterModule } from '@angular/router';
import { AddComponent } from '../addpage/add.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterpageComponent } from '../registerpage/registerpage.component';


@NgModule({
  declarations: [
    AppComponent,
    CarDescComponent ,
    SellerPageComponent,
    FetchComponent,
    EditpageComponent,
    AddComponent,
    LoginPageComponent,
    RegisterpageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    adminModule,
    HomeModule,
    signupModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    VehicleModule,
    RouterModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
