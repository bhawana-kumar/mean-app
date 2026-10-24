
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarfilterService } from '../../../service/carfilter.service';
import { StorageService } from '../../../../Signup/service/storage.service';
import { tap } from 'rxjs/operators';
import { SellerService } from '../../../service/seller.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../../Signup/login/login.component';
import { productManagementService } from '../../../../Admin/adminServices/productMangement.service';
import { customerManagementService } from '../../../../Admin/adminServices/customerManagement.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  vehicleId: string = '';
  payment: any = {
    dateTime: Date,
    buyerId: '',
    buyer: {
      name: "",
      contactNumber: "",
      address: ""
    },
    sellerId: '',
    seller: {
      name: "",
      contactNumber: "",
      address: ""
    },
    vehicleId: '',
    vehicle: {
      registrationNumber: "",
      VIN: "",
      brand: "",
      model: "",
      year: "",
      mileage: "",
      color: ""
    },
    price: '',
    paymentMethod: '',
    orderStatus: ''
  };


  razorpayOptions = {
    key: 'rzp_test_j8Crb5YuAOVNvN',
    name: 'AutoTrade Hub',
    description: 'Make Payment',
    image: '../assets/images/logo.png',
    notes: {
      address: 'Thank you'
    },
    theme: {
      color: '#020010'
    }
  };

  rzp: any;

  constructor(private http: HttpClient,private router:Router, private carfilter: CarfilterService, private route: ActivatedRoute,private dialog: MatDialog, private storageService: StorageService, private customerManagementService:customerManagementService,private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {

    

    this.route.params.subscribe(
      (params: Params) => {
        this.payment.vehicleId = params['id'];
        this.vehicleId = this.route.snapshot.params['id'];
      });
    this.rzp = new Razorpay(this.razorpayOptions);
  }
  submitForm() {
    if (this.storageService && this.storageService.getUser() ) {
      
    }else{
     
      const url = '/login';
      this.router.navigateByUrl(url);
      return
    }


    this.carfilter.getCarById(this.vehicleId).pipe(
      tap((data: any) => {
        this.payment.dateTime  = new Date().toISOString();
        this.payment.buyerId = this.storageService.getUser().id;
        this.payment.buyer.name = this.storageService.getUser().username;       
         this.payment.buyer.contactNumber = this.storageService.getUser().phone;
        this.payment.buyer.address = "abc apartment";
        this.payment.sellerId = data.sellerId;
        this.payment.seller.name = "";
        this.payment.seller.contactNumber = "";
        this.payment.seller.address = "" 
        this.payment.vehicleId = this.vehicleId;
        this.payment.vehicle.registrationNumber = data.registration_number;
      this.payment.vehicle.VIN = data.identification_number;
      this.payment.vehicle.brand= data.brandName;
      this.payment.vehicle.model= data.carName;
      this.payment.vehicle.year= data.manufYear; 
      this.payment.vehicle.mileage =data.mileage;
      this.payment.vehicle.color =data.color;
        this.payment.price = data.price;
        this.payment.paymentMethod = "Credit card"; 
        this.payment.orderStatus = 'pending'; 
      })
    ).subscribe(() => {
    this.customerManagementService.getUserDataById(this.payment.sellerId).pipe(
      tap((data: any) => {
        this.payment.seller.name = data.username;
        this.payment.seller.address = data.address || "";
        this.payment.seller.contactNumber = data.phone;

    })
    ).subscribe(()=>{
      console.log(this.payment);
      this.http.post<any>('http://localhost:4000/order/createOrder', this.payment)
        .subscribe(response => {
          console.log('Payment submitted successfully:', response);

        }, error => {
          console.error('Error submitting report:', error);
        });

        this.carfilter.updateVehicleStatusToSold(this.vehicleId,{status:'sold'}).subscribe(
          (updatedVehicle: any) => {
            console.log('Vehicle status updated to sold:', updatedVehicle);
          },
          error => {
            console.error('Error updating vehicle status to sold:', error);
          }
        );
    })
 
    });

    this.rzp.open();
    setTimeout(() => {
      this.snackBar.open('Payment Done successfully!', 'Close', {
        duration: 15000,
      });
    }, 30000); 
    
    setTimeout(() => {
      this.router.navigate(['/yourorderhistory']);
    }, 30000);
  }

}
