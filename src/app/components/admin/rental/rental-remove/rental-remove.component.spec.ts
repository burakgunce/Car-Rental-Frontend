import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalRemoveComponent } from './rental-remove.component';

describe('RentalRemoveComponent', () => {
  let component: RentalRemoveComponent;
  let fixture: ComponentFixture<RentalRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
