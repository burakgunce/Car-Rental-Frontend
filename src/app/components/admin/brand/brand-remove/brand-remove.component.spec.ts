import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRemoveComponent } from './brand-remove.component';

describe('BrandRemoveComponent', () => {
  let component: BrandRemoveComponent;
  let fixture: ComponentFixture<BrandRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
