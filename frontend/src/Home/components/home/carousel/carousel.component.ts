import { Component } from '@angular/core';
import { CarouselBrandFilterService, Vehicle } from '../../../service/carouselBrandFilter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  brands = [
    { name: 'Mahindra', image: '/assets/images/mahindra.jpg' },
    { name: 'Tata', image: './assets/images/tata.jpg' },
    { name: 'Toyoto', image: './assets/images/toyota.jpg' },
    { name: 'Honda', image: './assets/images/honda.jpg' },
    
  ];
  // vehicles = [];
  vehicles: Vehicle[] = [];
   
  constructor(private carouselBrandFilterService: CarouselBrandFilterService,
    private router: Router) { }

 

  filterVehicles(brandName: string) {
    // this.carouselBrandFilterService.getVehiclesByBrand(brandName).subscribe((data : Vehicle[]) => {
    //   console.log('Received vehicles:', data);
    //   this.vehicles = data;
    // });
    this.router.navigate(['/filtered-cars', brandName]);
  }
}
 