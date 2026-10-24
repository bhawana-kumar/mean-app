import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  @Input() user: any;
 
  ngOnInit(): void { console.log(this.user); }

}
