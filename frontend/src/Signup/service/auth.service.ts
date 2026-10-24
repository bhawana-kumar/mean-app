import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:4000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,private storageService:StorageService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, phone: Number, role:String): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        phone,
        role
      },
      httpOptions
    );
  }
  

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
  isAdmin(): boolean {
    
    const userRole = this.storageService.getUser().role;
    if(userRole == 'admin'){
      return true;
    }
    return false
  }

}
