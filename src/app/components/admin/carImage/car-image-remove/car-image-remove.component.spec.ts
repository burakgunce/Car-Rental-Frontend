import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageRemoveComponent } from './car-image-remove.component';

describe('CarImageRemoveComponent', () => {
  let component: CarImageRemoveComponent;
  let fixture: ComponentFixture<CarImageRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarImageRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarImageRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
