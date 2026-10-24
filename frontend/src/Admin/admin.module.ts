import { NgModule } from "@angular/core";
import { dashboardComponent } from "./Dashboard/dashboard.component";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { sidebarComponent } from "./SideBar/sidebar.component";
import { customerMangementComponent } from "./customerMangement/cm.component";
import { vehicleManagementComponent } from "./vehicleManagement/vehicleManagement.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { userDetailsComponent } from "./userDetails/userDetails.component";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DashComponent } from "./dash/dash.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from "./card/card.component";
import { orderManagementComponent } from "./ordersManagement/ordersManagement.compnent";
import { orderDetailsComponent } from "./orderDetails/orderDetails.component";
import { salesChartComponent } from "./charts/line-chart/line-chart.component";
import { pieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { barChartComponent } from "./charts/bar-chart/bar-chart.component";
import { reportsComponent } from "./reports/reports.component";
import { orderReceiptComponent } from "./orderReceipt/orderReceipt.component";
import {MatTooltip} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from "@angular/platform-browser";
import { AlertModalComponent } from "./alertModal/alertModal.component";
import { vehicleDetailsComponent } from "./vehicleDetails/vehicleDetails.component";
import { reportCardComponent } from "./reportCard/reportCard.component";
import { vehicleCardComponent } from "./vehicleCard/vehicleCard.component";
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
import { minicardComponent } from "./miniCard/minicard.component";

@NgModule({
    declarations: [dashboardComponent,
        sidebarComponent,
        customerMangementComponent,
        vehicleManagementComponent,
        reportsComponent,
        userDetailsComponent,
        DashComponent,
    CardComponent,
    reportCardComponent,
orderManagementComponent,
orderDetailsComponent,
vehicleDetailsComponent,
salesChartComponent,
pieChartComponent,
barChartComponent,
orderReceiptComponent,
AlertModalComponent,
vehicleCardComponent,
minicardComponent
],
    imports: [RouterLink,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([]),
        NgChartsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTooltip,
        MatDialogModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSlideToggle
    ],
    exports: [dashboardComponent,
        sidebarComponent,
        customerMangementComponent,
        vehicleManagementComponent,
        reportsComponent,
        userDetailsComponent,
        DashComponent,
        CardComponent,
        reportCardComponent,
        orderManagementComponent,
        orderDetailsComponent,
        vehicleDetailsComponent,
        salesChartComponent,
        pieChartComponent,
        barChartComponent,
        orderReceiptComponent,
        AlertModalComponent,
        vehicleCardComponent,
        minicardComponent
    ]

}) export class adminModule {

}