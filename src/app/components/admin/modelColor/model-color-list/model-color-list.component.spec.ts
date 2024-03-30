import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorListComponent } from './model-color-list.component';

describe('ModelColorListComponent', () => {
  let component: ModelColorListComponent;
  let fixture: ComponentFixture<ModelColorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelColorListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelColorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
