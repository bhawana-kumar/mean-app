import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
'../../assets/bootstrap.min.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  selectedTab: number = 1; // Default tab index

  showTab(tabIndex: number) {
    this.selectedTab = tabIndex;
}

}
