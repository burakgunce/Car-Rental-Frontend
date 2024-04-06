import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserOperationClaimDetail } from '../../../../models/details/userOperationClaimDetail';
import { UserOperationClaimService } from '../../../../services/concrete/user-operation-claim.service';


@Component({
  selector: 'app-user-operation-claim-list',
  templateUrl: './user-operation-claim-list.component.html',
  styleUrls: ['./user-operation-claim-list.component.css']
})
export class UserOperationClaimListComponent implements OnInit {

  userOperationClaimDetails: UserOperationClaimDetail[] = [];
  filterText: string = "";

  constructor(private userOperationClaimService: UserOperationClaimService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUserOperationClaimDetails();
  }

  getAllUserOperationClaimDetails(): void {
    this.userOperationClaimService.getAllUserOperationClaimDetails().subscribe(response => {
      this.userOperationClaimDetails = response.data;
    })
  }

  getUserOperationClaimDetailViewById(userOperationClaimId: number): void {
    this.router.navigate(["/admin/useroperationclaims/view/" + userOperationClaimId]);
  }

}
