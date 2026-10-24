import { Component, OnInit } from '@angular/core';
import { CarfilterService } from '../../../service/carfilter.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-car-desc',
  templateUrl: './car-desc.component.html',
  styleUrls: ['./car-desc.component.css']
})
export class CarDescComponent implements OnInit {
  car: any= []; 
  
  constructor(private viewportScroller: ViewportScroller,private router:Router , private route: ActivatedRoute,private carfilter: CarfilterService) {} 
  
  ngOnInit(): void {
    const carId = this.route.snapshot.params['id'];
    console.log('Car ID:', carId);
    this.carfilter.getCarById(carId).subscribe((data) => {
      this.car = data; 

      this.viewportScroller.scrollToPosition([0, 0]);
    }); 
  
}

toggleReportButton(id: number) {
  this.router.navigate(['/car-desc/report',id]);
}
}



