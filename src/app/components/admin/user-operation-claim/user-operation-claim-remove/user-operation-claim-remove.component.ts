import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaim } from '../../../../models/entities/userOperationClaim';
import { UserOperationClaimService } from '../../../../services/concrete/user-operation-claim.service';


@Component({
  selector: 'app-user-operation-claim-remove',
  templateUrl: './user-operation-claim-remove.component.html',
  styleUrls: ['./user-operation-claim-remove.component.css']
})
export class UserOperationClaimRemoveComponent implements OnInit {

  constructor(private userOperationClaimService: UserOperationClaimService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userOperationClaimId"]) {
        this.getUserOperationClaimById(params["userOperationClaimId"]);
      }
    });
  }

  getUserOperationClaimById(id: number): void {
    this.userOperationClaimService.getById(id).subscribe(response => {
      this.removeUserOperationClaim(response.data);
    })
  }

  removeUserOperationClaim(userOperationClaim: UserOperationClaim): void {
    this.userOperationClaimService.delete(userOperationClaim).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/userOperationClaims/list']);
    });
  }

}