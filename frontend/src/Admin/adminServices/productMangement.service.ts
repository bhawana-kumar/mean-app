import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productManagementService {
    private APIURL = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  getProductsData(): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getAllProductsData");
  }
  
  getProductsDataBySellerId(sellerId: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getProductsBySellerId/"+sellerId);
  }

  getVehicleDataById(vehicleId:string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getVehicleDataById/"+vehicleId);
  }

  deleteVehicleById(vehicleId:string): Observable<any[]> {
    return this.http.delete<any[]>(this.APIURL+"admin/deleteVehicleById/"+vehicleId);
  }

  updateVehicleBySellerId(sellerId:string,vehicle:any):Observable<any[]> {
    return this.http.patch<any[]>(this.APIURL+"admin/updateVehicleBySellerId/"+sellerId , vehicle);
  }

}
