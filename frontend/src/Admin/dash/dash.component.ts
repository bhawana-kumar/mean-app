import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { customerManagementService } from '../adminServices/customerManagement.service';
import { orderManagementService } from '../adminServices/orderManagement.service';
import { keyframes } from '@angular/animations';
import { productManagementService } from '../adminServices/productMangement.service';
import { reportManagementService } from '../adminServices/reportManagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent implements OnInit {

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          bigchart: {cols:1,rows:2},
          table: { cols: 1, rows: 3 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        bigchart: {cols:3,rows:2},
        table: { cols: 4, rows: 3 },
      };
    })
  );


  usersData: any = [];
  // TotalNoOfUsers: number = 0;
  // TotalNoOfBuyers: number = 0;
  TotalNoOfSellers: number = 0;
  linedataLoaded: boolean = false;

  ordersData: any = [];
  noOfOrdersCompleted: number = 0;
  noOfOrdersPending: number = 0;
  noOfOrdersOther: number = 0;
  totalRevenue:number = 0;
  //demo
  orderdataLoaded: boolean = false;
  pieDataArray: any = [];
  // orderStatus
  
//vehicles
vehiclesData:any = []
vehicledataLoaded: boolean = false;

//reports
reportsData:any = [];
unResolvedReports: number = 0;

//sellers
sellersData:any = [];


getSellersCarddata(){
  //get top 5 sellers Id from here
  this.customerManagementService.getTopSellersData().subscribe((data)=>{
    
    if(data){
      this.sellersData = data;
    }
  })
}


getReportsCarddata(){
  this.reportManagementService.getReportsData().subscribe((data)=>{
    this.reportsData = data;
    this.reportsData.filter((report: any) => {
      if (!report.resolved) {
        this.unResolvedReports++;
      } 
    });
  })
}

  getVehicleCarddata(){
    this.productManagementService.getProductsData().subscribe((data) => {
      this.vehiclesData = data;
      
      if(data){
        this.vehicledataLoaded = true;
      }
      
    })
  }


  getOrdersCarddata() {
    this.orderManagementService.getOrdersData().subscribe((res) => {
      this.ordersData = res;
      this.ordersData.filter((order: any) => {
        
        

        if (order.orderStatus.toLowerCase() === "delivered") {
          this.noOfOrdersCompleted++;
          this.totalRevenue += parseInt(order.price);
         
        } else if (order.orderStatus.toLowerCase() === 'pending') {
          this.noOfOrdersPending++;
          this.totalRevenue += parseInt(order.price);
        } else {
          this.noOfOrdersOther++;
          this.totalRevenue += parseInt(order.price);
        }
      });
      console.log(this.totalRevenue);
      this.pieDataArray[0] = this.noOfOrdersCompleted;
      this.pieDataArray[1] = this.noOfOrdersPending;
      this.pieDataArray[2] = this.noOfOrdersOther;
      this.orderdataLoaded = true;

    });
  }

  getUsersCarddata() {
    this.customerManagementService.getUserData().subscribe((res) => {
      this.usersData = res;
      this.linedataLoaded = true;
    })
  }

  constructor(private router:Router,private customerManagementService: customerManagementService, 
    private orderManagementService: orderManagementService,
    private productManagementService: productManagementService,
    private reportManagementService: reportManagementService) {

  }

  ngOnInit() {
    this.getUsersCarddata();
    this.getOrdersCarddata();
    this.getReportsCarddata();
    this.getVehicleCarddata();
    this.getSellersCarddata();
  }


  UserDetails(id: string) {
    const url = `/admin/customerManagement/${id}`;
    this.router.navigateByUrl(url);
  }
  redirectTo(value:string){
    let url = ''
    switch(value){
      case 'reports':
        url = "/admin/reports"
        break;
      case 'vehicles':
        url = "/admin/vehicleManagement"
        break;
      case 'users':
        url = "/admin/customerManagement"
        break;
      case 'orders':
        url = "/admin/orderManagement"
        break;
      default:
        url = "/admin";
    
    }


    
    this.router.navigateByUrl(url);
  }
}
