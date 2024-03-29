import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentThisCarComponent } from './rent-this-car.component';

describe('RentThisCarComponent', () => {
  let component: RentThisCarComponent;
  let fixture: ComponentFixture<RentThisCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentThisCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentThisCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
