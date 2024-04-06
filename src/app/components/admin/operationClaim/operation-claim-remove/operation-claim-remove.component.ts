import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from '../../../../models/entities/operationClaim';
import { OperationClaimService } from '../../../../services/concrete/operation-claim.service';


@Component({
  selector: 'app-operation-claim-remove',
  templateUrl: './operation-claim-remove.component.html',
  styleUrls: ['./operation-claim-remove.component.css']
})
export class OperationClaimRemoveComponent implements OnInit {

  constructor(private operationClaimService: OperationClaimService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["operationClaimId"]) {
        this.getOperationClaimById(params["operationClaimId"]);
      }
    });
  }

  getOperationClaimById(id: number): void {
    this.operationClaimService.getById(id).subscribe(response => {
      this.removeOperationClaim(response.data);
    })
  }

  removeOperationClaim(operationClaim: OperationClaim): void {
    this.operationClaimService.delete(operationClaim).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/operationClaims/list']);
    });
  }

}
