import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelRemoveComponent } from './model-remove.component';

describe('ModelRemoveComponent', () => {
  let component: ModelRemoveComponent;
  let fixture: ComponentFixture<ModelRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
