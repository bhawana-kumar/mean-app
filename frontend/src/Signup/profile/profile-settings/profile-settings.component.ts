import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
  @Input() user1: any;

  editingUsername: boolean = false;
  addingAddress: boolean = false;
  newAddress: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  @ViewChild('notificationArea') notificationArea!: ElementRef;


  constructor(private http: HttpClient) {}


  toggleAddingAddress(): void {
    this.addingAddress = !this.addingAddress;
    if (!this.addingAddress) {
      this.newAddress = '';
    }
  }


  updatePassword(): void {
    // a PUT request to update the user's password
    this.http.put('http://localhost:4000/api/auth/updatePassword', {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      confirmNewPassword: this.confirmNewPassword
    })
      .subscribe((response: any) => {
        console.log(response);
        this.showNotification('Password updated successfully!', 'success');
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
      }, (error: any) => {
        console.error(error);
        this.showNotification('Invalid Input. Failed to update password. ', 'error');
      });
  }
  updateAddress(): void {
    // Check if the user has an existing address
    if (this.user1.address) {
        // User has an existing address, so update it
        this.http.put('http://localhost:4000/api/auth/updateAddress', { address: this.newAddress })
            .subscribe((response: any) => {
                console.log(response);
                this.user1.address = this.newAddress; // Update the address in the frontend model
                this.newAddress = ''; // Reset the newAddress field
                this.toggleAddingAddress(); // Hide the address form
                this.showNotification('Address updated successfully!', 'success');
            }, (error: any) => {
                console.error(error);
                this.showNotification('Failed to update address. Please try again.', 'error');
            });
    } else {
        // User doesn't have an existing address, so add a new one
        this.http.put('http://localhost:4000/api/auth/addAddress', { address: this.newAddress })
            .subscribe((response: any) => {
                console.log(response);
                this.user1.address = this.newAddress; // Update the address in the frontend model
                this.newAddress = ''; // Reset the newAddress field
                this.toggleAddingAddress(); // Hide the address form
                this.showNotification('Address added successfully!', 'success');
            }, (error: any) => {
                console.error(error);
                this.showNotification('Failed to add address. Please try again.', 'error');
            });
    }
}



  showNotification(message: string, type: 'success' | 'error'): void {
    const notificationDiv = this.notificationArea.nativeElement;
    notificationDiv.innerHTML = `<div class="notification ${type}">${message}</div>`;
    setTimeout(() => {
      notificationDiv.innerHTML = '';
    }, 5000);
  }
}
