import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../../../../models/details/carDetail';
import { CustomerDetail } from '../../../../models/details/customerDetail';
import { RentalDetail } from '../../../../models/details/rentalDetail';
import { CarService } from '../../../../services/concrete/car.service';
import { CustomerService } from '../../../../services/concrete/customer.service';
import { RentalService } from '../../../../services/concrete/rental.service';


@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {


  rentalDetail: RentalDetail;
  rentalUpdateForm: FormGroup;
  carDetails: CarDetail[] = [];
  customerDetails: CustomerDetail[] = [];

  constructor(private rentalService: RentalService, private carService: CarService, private customerService: CustomerService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["rentalId"]) {
        this.getRentalDetailsById(params["rentalId"]);
      }
    });
  }

  getRentalDetailsById(id: number): void {
    this.rentalService.getRentalDetailsById(id).subscribe(response => {
      this.rentalDetail = response.data;
      this.getAllCarDetails();
    })
  }

  createRentalUpdateForm(): void {
    this.rentalUpdateForm = this.formBuilder.group({
      id: [this.rentalDetail ? this.rentalDetail.id : ""],
      carId: [this.rentalDetail ? this.rentalDetail.carId : "", [Validators.required]],
      customerId: [this.rentalDetail ? this.rentalDetail.customerId : "", [Validators.required]]
    });
  }

  updateRental(): void {
    console.log(this.rentalUpdateForm.value);
    let rentalModel = Object.assign({}, this.rentalUpdateForm.value);
    rentalModel.rentDate = new Date();
    if (this.rentalUpdateForm.valid) {
      this.rentalService.update(rentalModel).subscribe(response => {
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
      this.getAllCustomerDetails();
    })
  }

  getAllCustomerDetails(): void {
    this.customerService.getAllCustomerDetails().subscribe(response => {
      this.customerDetails = response.data;
      this.createRentalUpdateForm();
    })
  }
}
