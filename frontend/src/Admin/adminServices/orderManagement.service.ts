import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class orderManagementService {
    private APIURL = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  getOrdersData(): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getAllOrdersData");
  }

  getOrderDataById(orderId: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getOrder/"+orderId);
  }

  getOrderDataByBuyerId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getOrdersbyBuyerId/"+userId);
  }

  getOrderDataBySellerId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getOrdersbySellerId/"+userId);
  }

  getOrderDataByVehicleId(vehicleId: string):Observable<any[]>{
    return this.http.get<any[]>(this.APIURL+"admin/getOrdersbyVehicleId/"+vehicleId);
  }

}
