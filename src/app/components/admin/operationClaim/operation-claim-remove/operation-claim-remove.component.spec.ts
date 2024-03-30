import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationClaimRemoveComponent } from './operation-claim-remove.component';

describe('OperationClaimRemoveComponent', () => {
  let component: OperationClaimRemoveComponent;
  let fixture: ComponentFixture<OperationClaimRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationClaimRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationClaimRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
