import { CustomerDetail } from './../../../../models/details/customerDetail';
import { CarDetail } from './../../../../models/details/carDetail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from '../../../../services/concrete/car.service';
import { CustomerService } from '../../../../services/concrete/customer.service';
import { RentalService } from '../../../../services/concrete/rental.service';


@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm: FormGroup;
  carDetails: CarDetail[] = [];
  customerDetails: CustomerDetail[] = [];

  constructor(private rentalService: RentalService, private carService: CarService, private customerService: CustomerService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getAllCarDetails();
    this.getAllCustomerDetails();
  }

  createRentalAddForm(): void {
    this.rentalAddForm = this.formBuilder.group({
      carId: ["", [Validators.required]],
      customerId: ["", [Validators.required]]
    });
  }

  addRental(): void {
    console.log(this.rentalAddForm.value);
    let rentalModel = Object.assign({}, this.rentalAddForm.value);
    rentalModel.rentDate = new Date();
    if (this.rentalAddForm.valid) {
      this.rentalService.add(rentalModel).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/rentals/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(response => {
      this.customerDetails = response.data;
    })
  }
}
