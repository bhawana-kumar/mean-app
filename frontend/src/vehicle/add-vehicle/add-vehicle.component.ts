import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../Home/service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  imageUrl: string = '';
  sellerId: string | undefined;

  constructor(
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  vehicles = new FormGroup({

    "identification_number": new FormControl("", [Validators.required, Validators.pattern(/^[\dA-HJ-NPR-Z]{17}$/)]),
    "registration_number": new FormControl("", Validators.required),
    "location": new FormControl("", Validators.required),
    "brandName": new FormControl("", Validators.required),
    "carName": new FormControl("", Validators.required),
    "manufYear": new FormControl("", [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
    "ownerShip": new FormControl("", Validators.required),
    "driveType": new FormControl("", Validators.required),
    "carImg": new FormControl("", Validators.required),
    "color": new FormControl("", Validators.required),
    "seatingCapacity": new FormControl("", Validators.required),
    "price": new FormControl("", Validators.required),
    "engine": new FormControl("", Validators.required),
    "power": new FormControl("", Validators.required),
    "torque": new FormControl("", Validators.required),
    "fuelType": new FormControl("", Validators.required),
    "mileage": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "bodyType": new FormControl("", Validators.required),
    "sellerId": new FormControl("") // We include sellerId in the form control for internal processing
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sellerId = params.get('id') || ''; // Use empty string as default value
      this.vehicles.patchValue({ sellerId: this.sellerId });
      console.log(this.sellerId); 
    });
  }
  

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result?.toString() || '';
        this.vehicles.patchValue({
          carImg: this.imageUrl
        });
      };
      reader.readAsDataURL(file);
    }
  }

  addProductDetails() {
    console.log("Added", this.vehicles.value);
    this.service.saveProductDetails(this.vehicles.value).subscribe((response: any) => {
      console.log(response);
      window.alert('Form submitted successfully!');
      this.vehicles.reset();
      this.router.navigate([`/getSellers/${this.sellerId}`]);
    });
  }
}
