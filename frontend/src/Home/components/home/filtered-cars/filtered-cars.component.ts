import { Component, OnInit } from '@angular/core';
import { CarouselBrandFilterService, Vehicle } from '../../../service/carouselBrandFilter.service';
import { ActivatedRoute, Router } from '@angular/router';

interface vehicle {
  _id: string;
  carImg: string;
  brandName: string;
  carName: string;
  price: number;
}


@Component({
  selector: 'app-filtered-cars',
  templateUrl: './filtered-cars.component.html',
  styleUrls: ['./filtered-cars.component.css']
})
export class FilteredCarsComponent implements OnInit {
  vehicles: any[] = [];
  topCars: vehicle[] = [];
  topSearch: vehicle[] = [];
  topLux: vehicle[] = [];
  constructor( private activatedRoute: ActivatedRoute,
    private carouselBrandFilterService: CarouselBrandFilterService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const brandName = params['brandName'];
      this.carouselBrandFilterService.getVehiclesByBrand(brandName).subscribe((vehicles: Vehicle[]) => {
        // console.log(vehicles);
        
        this.vehicles = vehicles;
      });
    });
  }
  goToCardDetail(id: number) {
    this.router.navigate(['/car-desc', id]);
  }
}
