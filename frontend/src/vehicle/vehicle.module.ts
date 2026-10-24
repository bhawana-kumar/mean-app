
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchVehicleComponent } from './fetch-vehicle/fetch-vehicle.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AddVehicleComponent,
    FetchVehicleComponent,
    SellerDashboardComponent,
    EditVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule ,
    MatSidenav,
    MatMenuModule,
  ],
  exports: [
    AddVehicleComponent,
    FetchVehicleComponent,
    EditVehicleComponent,
    SellerDashboardComponent
  ]
})
export class VehicleModule { }
