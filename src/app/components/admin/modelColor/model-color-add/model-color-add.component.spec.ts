import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorAddComponent } from './model-color-add.component';

describe('ModelColorAddComponent', () => {
  let component: ModelColorAddComponent;
  let fixture: ComponentFixture<ModelColorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelColorAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelColorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
