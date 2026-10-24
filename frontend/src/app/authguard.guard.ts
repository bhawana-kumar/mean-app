import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../Signup/service/storage.service';
import { AuthService } from '../Signup/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private StorageService: StorageService, private router: Router, private authService:AuthService) {}

  canActivate(): boolean {
    const isAdmin = this.authService.isAdmin();
    if (isAdmin) {
      return true; 
    } else {
      this.router.navigate(['/']); 
      return false; 
    }
  }
}
