import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimViewComponent } from './user-operation-claim-view.component';

describe('UserOperationClaimViewComponent', () => {
  let component: UserOperationClaimViewComponent;
  let fixture: ComponentFixture<UserOperationClaimViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOperationClaimViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOperationClaimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
