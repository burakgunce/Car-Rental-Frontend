import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRemoveComponent } from './color-remove.component';

describe('ColorRemoveComponent', () => {
  let component: ColorRemoveComponent;
  let fixture: ComponentFixture<ColorRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
