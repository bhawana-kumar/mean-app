import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

  data=[]; 

  constructor(private dataService: ProductService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        console.log("response"+response)
        this.data = response;       
        console.log(this.data)
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

}
