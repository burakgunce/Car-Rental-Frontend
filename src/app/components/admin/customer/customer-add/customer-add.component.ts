import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForInfoDetail } from '../../../../models/details/userForInfoDetail';
import { CustomerService } from '../../../../services/concrete/customer.service';
import { UserService } from '../../../../services/concrete/user.service';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm: FormGroup;
  users: UserForInfoDetail[] = [];

  constructor(private customerService: CustomerService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
    this.getAllUsers();
  }

  createCustomerAddForm(): void {
    this.customerAddForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      companyName: ["", [Validators.required]]
    });
  }

  addCustomer(): void {
    console.log(this.customerAddForm.controls['userId'].value);
    console.log(this.customerAddForm.value);
    if (this.customerAddForm.valid) {
      this.customerService.add(this.customerAddForm.value).subscribe(response => {
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
    })
  }

  get name() { return this.customerAddForm.get('name') }
  get userName() { return this.customerAddForm.get('userName') }

}
