import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDescComponent } from './car-desc.component';

describe('CarDescComponent', () => {
  let component: CarDescComponent;
  let fixture: ComponentFixture<CarDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
