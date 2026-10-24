import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

const API_URL = 'http://localhost:4000/api/auth/signup';
const baseUrl = 'http://localhost:4000/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: any;
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getBuyer(orderId: string): Observable<any> {
    const url = `${this.baseUrl}/order/${orderId}/buyer`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error fetching buyer data:', error);
        return throwError('Something went wrong while fetching buyer data. Please try again later.');
      })
    );
  }
  getSeller(orderId: string): Observable<any> {
    const url = `${this.baseUrl}/order/${orderId}/seller`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error fetching seller data:', error);
        return throwError('Something went wrong while fetching buyer data. Please try again later.');
      })
    );
  }

  getOrderDataByBuyerId(userId: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:4000/admin/getOrdersbyBuyerId/"+userId);
  }
  
}
