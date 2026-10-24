import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarSelectionService {
  private selectedCarIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  setSelectedCarId(carId: number): void {
    this.selectedCarIdSubject.next(carId);
  }

  getSelectedCarId(): Observable<number | null> {
    return this.selectedCarIdSubject.asObservable();
  }
}
