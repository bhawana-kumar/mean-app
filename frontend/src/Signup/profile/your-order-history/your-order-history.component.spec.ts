import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderHistoryComponent } from './your-order-history.component';

describe('YourOrderHistoryComponent', () => {
  let component: YourOrderHistoryComponent;
  let fixture: ComponentFixture<YourOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourOrderHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
