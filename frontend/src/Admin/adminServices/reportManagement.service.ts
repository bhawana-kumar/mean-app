import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class reportManagementService {
    private APIURL = 'http://localhost:4000/'

    constructor(private http: HttpClient) { }

    getReportsData(): Observable<any[]> {
        return this.http.get<any[]>(this.APIURL + "admin/getAllReportsData");
    }
    getReportsDataByVehicleId(vehicleId: string): Observable<any[]> {
        return this.http.get<any[]>(this.APIURL + "admin/getReportsByVehicleId/" + vehicleId);
    }
    getReportsDataByBuyerId(buyerId: string): Observable<any[]> {
        return this.http.get<any[]>(this.APIURL + "admin/getReportsByBuyerId/" + buyerId);
    }
    getReportsDataBySellerId(sellerId: string): Observable<any[]> {
        return this.http.get<any[]>(this.APIURL + "admin/getReportsBySellerId/" + sellerId);
    }
    updateReportsDataByVehicleId(vehicleId: string,report:any): Observable<any[]>{
        return this.http.patch<any[]>(this.APIURL + "admin/updateReportsByVehicleId/" + vehicleId,report);
    }

}