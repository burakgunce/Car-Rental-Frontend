import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelUpdateComponent } from './model-update.component';

describe('ModelUpdateComponent', () => {
  let component: ModelUpdateComponent;
  let fixture: ComponentFixture<ModelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
