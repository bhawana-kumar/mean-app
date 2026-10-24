import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SellerPageComponent } from '../seller-page/seller-page.component';
import { FetchComponent } from '../fetch/fetch.component';
import { DashComponent } from '../Admin/dash/dash.component';

const routes: Routes = [
{ path:'edit-product/:id' , component:EditVehicleComponent},
{ path: 'add-vehicle', component: AddVehicleComponent },
{ path: 'fetch-vehicle', component: FetchComponent },
{path:'getSellers/:id', component: SellerPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
