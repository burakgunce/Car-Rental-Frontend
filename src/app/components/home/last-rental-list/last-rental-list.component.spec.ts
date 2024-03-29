import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRentalListComponent } from './last-rental-list.component';

describe('LastRentalListComponent', () => {
  let component: LastRentalListComponent;
  let fixture: ComponentFixture<LastRentalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastRentalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastRentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
