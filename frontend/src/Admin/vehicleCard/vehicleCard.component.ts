import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "vehicle-card",
    templateUrl: "./vehicleCard.component.html",
    styleUrl: "./vehicleCard.component.css"
}) export class vehicleCardComponent {
    
    @Input() vehicleData: any = [];
  
    constructor(private router:Router){

    }
   

    ngOnInit(): void {
         console.log(this.vehicleData);
        
    }
  
}