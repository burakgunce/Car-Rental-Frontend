import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForInfoDetail } from '../../../../models/details/userForInfoDetail';
import { UserOperationClaimDetail } from '../../../../models/details/userOperationClaimDetail';
import { OperationClaim } from '../../../../models/entities/operationClaim';
import { OperationClaimService } from '../../../../services/concrete/operation-claim.service';
import { UserOperationClaimService } from '../../../../services/concrete/user-operation-claim.service';
import { UserService } from '../../../../services/concrete/user.service';


@Component({
  selector: 'app-user-operation-claim-update',
  templateUrl: './user-operation-claim-update.component.html',
  styleUrls: ['./user-operation-claim-update.component.css']
})
export class UserOperationClaimUpdateComponent implements OnInit {

  userOperationClaimUpdateForm: FormGroup;
  users: UserForInfoDetail[] = [];
  operationClaims: OperationClaim[] = [];
  userOperationClaimDetail: UserOperationClaimDetail;

  constructor(private userOperationClaimService: UserOperationClaimService, private userService: UserService, private operationClaimService: OperationClaimService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userOperationClaimId"]) {
        this.getUserOperationClaimDetailsById(params["userOperationClaimId"]);
      }
    });
  }

  getUserOperationClaimDetailsById(id: number): void {
    this.userOperationClaimService.getUserOperationClaimDetailsById(id).subscribe(response => {
      this.userOperationClaimDetail = response.data;
      this.getAllUsers();
    })
  }

  createUserOperationClaimUpdateForm(): void {
    this.userOperationClaimUpdateForm = this.formBuilder.group({
      id: [this.userOperationClaimDetail ? this.userOperationClaimDetail.id : "", []],
      userId: [this.userOperationClaimDetail ? this.userOperationClaimDetail.userId : "", [Validators.required]],
      operationClaimId: [this.userOperationClaimDetail ? this.userOperationClaimDetail.operationClaimId : "", [Validators.required]]
    });
  }

  updateUserOperationClaim(): void {
    console.log(this.userOperationClaimUpdateForm.value);
    if (this.userOperationClaimUpdateForm.valid) {
      this.userOperationClaimService.update(this.userOperationClaimUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/useroperationclaims/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response.data;
      this.getAllOperationClaims();
    })
  }

  getAllOperationClaims(): void {
    this.operationClaimService.getAll().subscribe(response => {
      this.operationClaims = response.data;
      this.createUserOperationClaimUpdateForm();
    })
  }

}
