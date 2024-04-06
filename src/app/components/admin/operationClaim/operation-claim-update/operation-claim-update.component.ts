import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from '../../../../models/entities/operationClaim';
import { OperationClaimService } from '../../../../services/concrete/operation-claim.service';


@Component({
  selector: 'app-operation-claim-update',
  templateUrl: './operation-claim-update.component.html',
  styleUrls: ['./operation-claim-update.component.css']
})
export class OperationClaimUpdateComponent implements OnInit {

  operationClaimUpdateForm: FormGroup;
  operationClaim: OperationClaim;

  constructor(private operationClaimService: OperationClaimService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["operationClaimId"]) {
        this.getOperationClaimById(params["operationClaimId"]);
      }
    });
  }

  createOperationClaimUpdateForm(): void {
    this.operationClaimUpdateForm = this.formBuilder.group({
      id: [this.operationClaim ? this.operationClaim.id : ""],
      name: [this.operationClaim ? this.operationClaim.name : "", [Validators.required]],
    });
  }

  getOperationClaimById(id: number): void {
    this.operationClaimService.getById(id).subscribe(response => {
      this.operationClaim = response.data;
      this.createOperationClaimUpdateForm();
    })
  }

  updateOperationClaim(): void {
    if (this.operationClaimUpdateForm.valid) {
      this.operationClaimService.update(this.operationClaimUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.operationClaimUpdateForm.controls['name'].value);
        this.router.navigate(["/admin/operationslaims/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.operationClaimUpdateForm.get('name') }

}
