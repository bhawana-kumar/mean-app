
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  recommendedItems: any[] = []; 
  carouselPosition: number = 0; 
  visibleRecommendedItems: any[] = []; 

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.fetchRecommendedItems();
  }

  fetchRecommendedItems() {
    this.http.get<any[]>('http://localhost:4000/vehicle/getAllVehicleData')
      .subscribe((data) => {
        console.log('All Recommended Items:', data);
        data = this.shuffle(data);
        this.recommendedItems = data.slice(0, 10);
        this.visibleRecommendedItems = [...this.recommendedItems]; 
      });
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  slide(direction: string) {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      if (direction === 'prev') {
        this.carouselPosition += carousel.clientWidth ?? 0; 
      } else {
        this.carouselPosition -= carousel.clientWidth ?? 0; 
      }
    }
  }

  goToCardDetail(id: string) {
    this.router.navigate(['/recomm-car-desc', id]);
  }

}
