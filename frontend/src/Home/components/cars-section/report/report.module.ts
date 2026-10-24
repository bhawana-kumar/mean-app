import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportComponent} from '../report/report.component'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],export:[
    ReportComponent
    
  ],providers: [
    CarDescComponent
  ]
})
export class ReportModule { }
