import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorRemoveComponent } from './model-color-remove.component';

describe('ModelColorRemoveComponent', () => {
  let component: ModelColorRemoveComponent;
  let fixture: ComponentFixture<ModelColorRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelColorRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelColorRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
