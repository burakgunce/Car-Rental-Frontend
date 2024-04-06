import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOperationClaimDetail } from '../../../../models/details/userOperationClaimDetail';
import { UserOperationClaimService } from '../../../../services/concrete/user-operation-claim.service';


@Component({
  selector: 'app-user-operation-claim-view',
  templateUrl: './user-operation-claim-view.component.html',
  styleUrls: ['./user-operation-claim-view.component.css']
})
export class UserOperationClaimViewComponent implements OnInit {

  userOperationClaimDetail: UserOperationClaimDetail;

  constructor(private userOperationClaimService: UserOperationClaimService, private activatedRoute: ActivatedRoute) { }

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
    })
  }
}
