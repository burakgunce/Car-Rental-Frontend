import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimViewComponent } from './operation-claim-view.component';

describe('OperationClaimViewComponent', () => {
  let component: OperationClaimViewComponent;
  let fixture: ComponentFixture<OperationClaimViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationClaimViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationClaimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
