import { Component, Input, OnInit } from "@angular/core";
import { orderManagementService } from "../adminServices/orderManagement.service";
import { Router } from "@angular/router";

@Component({
    selector: 'orderReceipt-component',
    templateUrl: './orderReceipt.component.html',
    styleUrl: './orderReceipt.component.css'
}) export class orderReceiptComponent implements OnInit{

    @Input() receiptsData: any = [];
    constructor(private router:Router){

    }
    ngOnInit(): void {
         console.log(this.receiptsData);
       
    }

    UserDetails(id:string){
        const url = `/admin/customerManagement/${id}`;
        this.router.navigateByUrl(url);
        console.log("hii");
      }
  
    vehicleDetails(id:string){
        const  url= `/admin/vehicleManagement/${id}`;
        this.router.navigateByUrl(url);
      }
    
}