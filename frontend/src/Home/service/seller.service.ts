import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {



  constructor(private http : HttpClient) { }
  
  getSellerInformation(sellerId: string): Observable<any> {
    return this.http.get(`http://localhost:4000/vehicle/getSellers/${sellerId}`);
  }

}





