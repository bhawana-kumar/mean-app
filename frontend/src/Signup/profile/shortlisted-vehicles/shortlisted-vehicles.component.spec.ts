import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedVehiclesComponent } from './shortlisted-vehicles.component';

describe('ShortlistedVehiclesComponent', () => {
  let component: ShortlistedVehiclesComponent;
  let fixture: ComponentFixture<ShortlistedVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortlistedVehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortlistedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
