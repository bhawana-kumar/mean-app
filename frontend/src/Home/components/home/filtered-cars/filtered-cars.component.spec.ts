/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilteredCarsComponent } from './filtered-cars.component';

describe('FilteredCarsComponent', () => {
  let component: FilteredCarsComponent;
  let fixture: ComponentFixture<FilteredCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
