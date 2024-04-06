import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../../../models/entities/customer';
import { CustomerService } from '../../../../services/concrete/customer.service';


@Component({
  selector: 'app-customer-remove',
  templateUrl: './customer-remove.component.html',
  styleUrls: ['./customer-remove.component.css']
})
export class CustomerRemoveComponent implements OnInit {

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["customerId"]) {
        this.getCustomerById(params["customerId"]);
      }
    });
  }

  getCustomerById(id: number): void {
    this.customerService.getById(id).subscribe(response => {
      this.removeCustomer(response.data);
    })
  }

  removeCustomer(customer: Customer): void {
    this.customerService.delete(customer).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/customers/list']);
    });
  }

}
