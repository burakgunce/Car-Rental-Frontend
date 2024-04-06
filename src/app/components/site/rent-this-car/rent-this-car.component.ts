import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RentalDetail } from '../../../models/details/rentalDetail';
import { RentalService } from '../../../services/concrete/rental.service';

@Component({
  selector: 'app-rent-this-car',
  templateUrl: './rent-this-car.component.html',
  styleUrls: ['./rent-this-car.component.css']
})
export class RentThisCarComponent implements OnInit {

  @Input() currentCarId: number;
  availability: boolean;
  dateRangeForm: FormGroup;
  rentalDetail: RentalDetail;

  constructor(private rentalService: RentalService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.isCarAvailable(this.currentCarId);
    this.createdateRangeForm();
  }

  createdateRangeForm(): void {
    this.dateRangeForm = this.formBuilder.group({
      start: ["", [Validators.required]],
      end: ["", []]
    });
  }

  isCarAvailable(carId: number): void {
    this.rentalService.isCarAvailable(carId).subscribe(response => {
      this.availability = response.data;
    });
  }

}