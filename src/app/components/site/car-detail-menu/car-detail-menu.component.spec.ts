import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailMenuComponent } from './car-detail-menu.component';

describe('CarDetailMenuComponent', () => {
  let component: CarDetailMenuComponent;
  let fixture: ComponentFixture<CarDetailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarDetailMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
