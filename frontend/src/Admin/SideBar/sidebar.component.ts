import { Component } from "@angular/core";
import { StorageService } from "../../Signup/service/storage.service";
import { AuthService } from "../../Signup/service/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertModalComponent } from "../alertModal/alertModal.component";


@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
}) export class sidebarComponent {
    name: string = 'Admin';
    profileUrl = "https://api.dicebear.com/7.x/initials/svg?seed=" + this.name;

    constructor(
        private storageService: StorageService,
        private authService: AuthService,
        public dialog: MatDialog
    ) { }

    openDialog() {
        const dialogRef = this.dialog.open(AlertModalComponent, {
            data: {
                message: '<!DOCTYPE html><html><body><h1>LogOut</h1></body></html>',
                buttonText: {
                    cancel: 'Cancel',
                    action: 'LogOut'
                }
            },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.logout()
                return
            }
        });
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
    }


}