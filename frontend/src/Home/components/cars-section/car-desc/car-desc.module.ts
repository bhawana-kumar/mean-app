import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
// import { CarDescComponent } from './car-desc.component';
import { CarfilterService } from '../../../service/carfilter.service'; 

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule, // Add CommonModule here
    HttpClientModule
  ],
  providers: [
    CarfilterService 
  ]
  
})
export class CarDescModule { }
