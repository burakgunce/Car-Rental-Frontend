import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimRemoveComponent } from './user-operation-claim-remove.component';

describe('UserOperationClaimRemoveComponent', () => {
  let component: UserOperationClaimRemoveComponent;
  let fixture: ComponentFixture<UserOperationClaimRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationClaimRemoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOperationClaimRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
