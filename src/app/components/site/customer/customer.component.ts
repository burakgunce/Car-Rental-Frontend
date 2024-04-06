import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from '../../../models/details/customerDetail';
import { Customer } from '../../../models/entities/customer';
import { CustomerService } from '../../../services/concrete/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customerDetails: CustomerDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.customerService.getAll().subscribe(response => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(response => {
      this.customerDetails = response.data;
      this.dataLoaded = true;
    });
  }

}
