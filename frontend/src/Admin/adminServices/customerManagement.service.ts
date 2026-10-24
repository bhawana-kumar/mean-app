import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class customerManagementService {
    private APIURL = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getAllUsersData");
  }

  getUserDataById(userId: string): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getUser/"+userId);
  }

  updateUserDetailsById(userId: string,user:any): Observable<any[]> {
    return this.http.patch<any[]>(this.APIURL+"admin/updateUser/"+userId,user);
  }

  deleteUserById(userId:string): Observable<any[]>{
    return this.http.delete<any[]>(this.APIURL+"admin/deleteUser/"+userId)
  }

  getTopSellersData(): Observable<any[]> {
    return this.http.get<any[]>(this.APIURL+"admin/getTopSellersData");
  }

}
