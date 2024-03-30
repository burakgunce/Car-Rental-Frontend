import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorUpdateComponent } from './model-color-update.component';

describe('ModelColorUpdateComponent', () => {
  let component: ModelColorUpdateComponent;
  let fixture: ComponentFixture<ModelColorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelColorUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelColorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
