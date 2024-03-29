import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailFilterComponent } from './car-detail-filter.component';

describe('CarDetailFilterComponent', () => {
  let component: CarDetailFilterComponent;
  let fixture: ComponentFixture<CarDetailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDetailFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
