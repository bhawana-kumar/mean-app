import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { productManagementService } from "../adminServices/productMangement.service";
import { reportManagementService } from "../adminServices/reportManagement.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AlertModalComponent } from "../alertModal/alertModal.component";
import { orderManagementService } from "../adminServices/orderManagement.service";

@Component({
  selector: 'vehicle-details',
  templateUrl: './vehicleDetails.component.html',
  styleUrl: './vehicleDetails.component.css'
})
export class vehicleDetailsComponent {
  vehicleId: string = ''
  vehicleData: any = [];
  reportsData: any = [];
  reportsDataLength: number = 0;
  orderData:any = [];
  orderDataLoaded:boolean = false;

  constructor(private route: ActivatedRoute, private productManagementService: productManagementService, private router: Router,
    private reportManagementService: reportManagementService, private orderManagementService:orderManagementService,
    public dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  getVehicleDetails() {
    this.productManagementService.getVehicleDataById(this.vehicleId).subscribe((data) => {
      this.vehicleData[0] = data;
      console.log(data);
      if (!data) {
        const url = `/admin/vehicleManagement`;
        this.router.navigateByUrl(url);
        return
      }
     
      if(this.vehicleData[0].status == 'sold'){
        this.getOrderDetails();
      }
      
    })
  }
  getReportsDetails() {
    this.reportManagementService.getReportsDataByVehicleId(this.vehicleId).subscribe((data) => {
      this.reportsData = data;
      this.reportsDataLength = this.reportsData.length;
      console.log(data);
    })
  }
  getOrderDetails(){
    this.orderManagementService.getOrderDataByVehicleId(this.vehicleId).subscribe((data) => {
      if(!data){
        return
      }
      this.orderData[0] = data;
      this.orderDataLoaded = true;
    })
  }
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.getVehicleDetails();
      this.getReportsDetails();
       //temp
       this.getOrderDetails();
    });
  }
  

  updateReportsByVehicleId() {
    this.reportManagementService.updateReportsDataByVehicleId(this.vehicleId,{'resolved':true}).subscribe((data) => {
      console.log("report updated Success");
    })
  }

  deleteVehicleById() {
    console.log("delete")
    this.productManagementService.deleteVehicleById(this.vehicleId).subscribe(
      result => {
        if(!result){
          return
        }
        this.openSnackBar("Vehicle Deleted Successfully", "close");
        this.updateReportsByVehicleId()
        const url = `/admin/vehicleManagement`;
        this.router.navigateByUrl(url);
      },
      error => {
        console.log("Error Deleting User Details", error);
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      data: {
        message: '<!DOCTYPE html><html><body><h1>Delete</h1><p>Do You Want to Delete this Vehicle?</p></body></html>',
        buttonText: {
          cancel: 'Cancel',
          action: 'Confirm'
        }
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicleById();
        return
      }
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}