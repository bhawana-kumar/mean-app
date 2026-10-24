import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'report-card',
    templateUrl: './reportCard.component.html',
    styleUrl: './reportCard.component.css'
})
export class reportCardComponent{
    
    @Input() reportsData: any = [];
    activatebtn:any = false;
    constructor(private router:Router, private route:ActivatedRoute){

    }
    isButtonHidden(){
      const currentRoute = this.route.snapshot;
      return currentRoute.routeConfig && currentRoute.routeConfig.path && currentRoute.routeConfig.path.includes('vehicleManagement');
    }

    ngOnInit(): void {
         console.log(this.reportsData);
         const currentRoute = this.route.snapshot;
         this.activatebtn = this.isButtonHidden();
         console.log(this.activatebtn)
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