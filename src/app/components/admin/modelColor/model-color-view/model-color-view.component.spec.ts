import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorViewComponent } from './model-color-view.component';

describe('ModelColorViewComponent', () => {
  let component: ModelColorViewComponent;
  let fixture: ComponentFixture<ModelColorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelColorViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelColorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
