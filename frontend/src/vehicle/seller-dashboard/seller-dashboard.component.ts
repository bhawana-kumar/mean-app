
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../Home/service/seller.service';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../Signup/service/auth.service';
import { StorageService } from '../../Signup/service/storage.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  seller: any | undefined; // Define a variable of type Seller to hold seller data
  sellerId: any = '';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sellerService: SellerService, private authService : AuthService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  
      this.sellerId = this.route.snapshot.paramMap.get('id');
    
      if (this.sellerId) {
          this.fetchSellerInformation(this.sellerId);
      } else {
          console.error('Seller ID not found in route parameters');
      }
  }
  // /  });
  // }
  gotoAddVehicle(){
    const url = `/add-vehicle/${this.sellerId}`;
    this.router.navigateByUrl(url);
    }

    gotoFetchVehicle(){
      const url = `/fetch-vehicle/${this.sellerId}`;
      this.router.navigateByUrl(url)
    }
  
    fetchSellerInformation(sellerId: string) {
    this.sellerService.getSellerInformation(sellerId).subscribe(
      (data: any) => { 
        this.seller = data;
      },
      (error: any) => {
        console.error('Error fetching seller information:', error);
      }
    );
  }

  profile() {
    throw new Error('Method not implemented.');
    }

  toggleSidenav() {
    this.sidenav.toggle();
  }

logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
    this.router.navigateByUrl("/logout");
  }

}