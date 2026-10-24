import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  brandName: string;
  manufYear: string;
  engine:string;
  power:string;
  carImg: string;
  carName: string;
  price: number;

 
}


@Injectable({
  providedIn: 'root'
})
export class CarouselBrandFilterService {
  private apiUrl = 'http://localhost:4000';
constructor(private http: HttpClient) { }

getVehiclesByBrand(brandName: string): Observable<Vehicle[]> {
  console.log(`Fetching vehicles for brand: ${brandName}`);
  return this.http.get<Vehicle[]>(`${this.apiUrl}/carouselBrandFilter/brandName/${brandName}`);
}

}

