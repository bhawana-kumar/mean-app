

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  private apiUrl = 'http://your-backend-api-url/api/orders'; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  getOrders(orderId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${orderId}`);
  }
  
}
