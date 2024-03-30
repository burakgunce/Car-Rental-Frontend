import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageViewComponent } from './car-image-view.component';

describe('CarImageViewComponent', () => {
  let component: CarImageViewComponent;
  let fixture: ComponentFixture<CarImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarImageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
