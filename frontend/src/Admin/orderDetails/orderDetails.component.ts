import { Component, OnChanges, OnInit } from "@angular/core";
import { orderManagementService } from "../adminServices/orderManagement.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'orderDetails',
    templateUrl: './orderDetails.component.html',
    styleUrl: './orderDetails.component.css'
}) export class orderDetailsComponent{
    orderId: string = ''
    orderdata: any = [];
    dataloaded:boolean = false;
    constructor(private orderManagementService: orderManagementService,private router:Router,private route: ActivatedRoute){
  
    }
    
  getOrderDetails() {

    this.orderManagementService.getOrderDataById(this.orderId).subscribe((data) => {
      this.orderdata[0] = data;
      console.log(this.orderdata);
      this.dataloaded = true;
      if (!data) {
        const url = `/admin/orderManagement`;
        this.router.navigateByUrl(url);
      }
    },
      (error) => {
        console.error('Error occurred:', error);
      });

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];

      this.getOrderDetails();
    });

  }
  // ngOnChanges(){
  //   this.route.params.subscribe(params => {
  //     this.orderId = params['id'];

  //     this.getOrderDetails();
  //   });
  // }

  gotoUser(){
    const url = `/admin/customerManagement/${this.orderdata.user_id}`;
    this.router.navigateByUrl(url);
  }

  gotoProducts(){
    const url = `/admin/vehicalManagement/${this.orderdata.vehicalDetails[0]}`;
    this.router.navigateByUrl(url);
  }
}