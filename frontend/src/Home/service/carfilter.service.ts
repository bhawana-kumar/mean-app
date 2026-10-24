import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarfilterService {
  
  constructor(private http: HttpClient) { }
 
  findCarDetails(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4000/vehicle/getAllVehicleData');
  }

  getCarById(carId: String): Observable<any> {
    
    const url = `http://localhost:4000/vehicle/getVehicle/${carId}`;
    return this.http.get<any>(url);
   }
   getUserById(sellerId: String): Observable<any> {
    
    const url = `http://localhost:4000/user/getUserById/${sellerId}`;
    return this.http.get<any>(url);
   }
   
  getCar(): Observable<any> {
    return this.http.get<any>("http://localhost:4000/vehicle/getAllVehicleData");
  }

  updateVehicleStatusToSold(vehicleId: string,updated:any): Observable<any> {
    return this.http.patch<any>(`http://localhost:4000/order/updateVehicleByVehicleId/${vehicleId}`, updated);
  }
  fetchDescription(carId: number): Observable<string> {
const url = `http://localhost:4000/vehicle/getVehicle/${carId}`;

    return this.http.get<string>(`${url}/${carId}`);
  }
 
  submitReport( comment: string,vehicleId: string,buyerId: string,buyerName: string,sellerName: string,sellerId: string, vehicleRegistrationNumber: string) {
    const reportData = { comment,vehicleId,buyerId,buyerName,sellerName,sellerId, vehicleRegistrationNumber};
    return this.http.post<any>('http://localhost:4000/report/createReport', reportData);
  }


  getProductPage() {
    return this.http.get(`http://localhost:4000/payment/payment`);
  }

  
}