import { CustomerDetail } from './../../../../models/details/customerDetail';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForInfoDetail } from '../../../../models/details/userForInfoDetail';
import { CustomerService } from '../../../../services/concrete/customer.service';
import { UserService } from '../../../../services/concrete/user.service';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerUpdateForm: FormGroup;
  users: UserForInfoDetail[] = [];
  customerDetail: CustomerDetail;

  constructor(private customerService: CustomerService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["customerId"]) {
        this.getCustomerDetailsById(params["customerId"]);
      }
    });
  }

  getCustomerDetailsById(id: number): void {
    this.customerService.getCustomerDetailsById(id).subscribe(response => {
      this.customerDetail = response.data;
      this.getAllUsers();
    })
  }

  createCustomerUpdateForm(): void {
    this.customerUpdateForm = this.formBuilder.group({
      id: [this.customerDetail ? this.customerDetail.id : ""],
      userId: [this.customerDetail ? this.customerDetail.userId : "", [Validators.required]],
      companyName: [this.customerDetail ? this.customerDetail.companyName : "", [Validators.required]]
    });
  }

  updateCustomer(): void {
    console.log(this.customerUpdateForm.controls['userId'].value);
    console.log(this.customerUpdateForm.value);
    if (this.customerUpdateForm.valid) {
      this.customerService.update(this.customerUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/customers/list"]);
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
      this.createCustomerUpdateForm();
    })
  }

}
