import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';

interface Vehicle {
  _id: string;
  carImg: string;
  brandName: string;
  carName: string;
  price: number;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  topCars: Vehicle[] = [];
  topSearch: Vehicle[] = [];
  topLux: Vehicle[] = [];

  constructor(private dataService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response: Vehicle[]) => {
        this.topCars = response.slice(6, 10);
        this.topSearch = response.slice(5, 9);
        this.topLux = response.slice(8, 10);
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  goToCardDetail(id: string) {
    this.router.navigate(['/car-desc', id]);
  }
}
