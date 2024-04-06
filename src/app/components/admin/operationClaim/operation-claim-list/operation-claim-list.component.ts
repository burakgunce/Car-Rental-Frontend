import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationClaim } from '../../../../models/entities/operationClaim';
import { OperationClaimService } from '../../../../services/concrete/operation-claim.service';


@Component({
  selector: 'app-operation-claim-list',
  templateUrl: './operation-claim-list.component.html',
  styleUrls: ['./operation-claim-list.component.css']
})
export class OperationClaimListComponent implements OnInit {

  operationClaims: OperationClaim[] = [];
  filterText: string = "";

  constructor(private operationClaimService: OperationClaimService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOperationClaims();
  }

  getAllOperationClaims(): void {
    this.operationClaimService.getAll().subscribe(response => {
      this.operationClaims = response.data;
    })
  }

  getOperationClaimViewById(operationClaimId: number): void {
    this.router.navigate(["/admin/operationclaims/view/" + operationClaimId]);
  }


}
