import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailHistoryComponent } from './rental-detail-history.component';

describe('RentalDetailHistoryComponent', () => {
  let component: RentalDetailHistoryComponent;
  let fixture: ComponentFixture<RentalDetailHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalDetailHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalDetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
