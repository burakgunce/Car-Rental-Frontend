import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaimService } from '../../../../services/concrete/operation-claim.service';


@Component({
  selector: 'app-operation-claim-add',
  templateUrl: './operation-claim-add.component.html',
  styleUrls: ['./operation-claim-add.component.css']
})
export class OperationClaimAddComponent implements OnInit {

  operationClaimAddForm: FormGroup;

  constructor(private operationClaimService: OperationClaimService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createOperationClaimAddForm();
  }

  createOperationClaimAddForm(): void {
    this.operationClaimAddForm = this.formBuilder.group({
      name: ["", [Validators.required]],
    });
  }

  addOperationClaim(): void {
    if (this.operationClaimAddForm.valid) {
      this.operationClaimService.add(this.operationClaimAddForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.operationClaimAddForm.controls['name'].value);
        this.router.navigate(["/admin/operationclaims/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.operationClaimAddForm.get('name') }
}
