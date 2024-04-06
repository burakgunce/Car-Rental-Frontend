import { RentalDetail } from '../../../models/details/rentalDetail';
import { Component, Input, OnInit } from '@angular/core';
import { RentalService } from '../../../services/concrete/rental.service';

@Component({
  selector: 'app-rental-detail-history',
  templateUrl: './rental-detail-history.component.html',
  styleUrls: ['./rental-detail-history.component.css']
})
export class RentalDetailHistoryComponent implements OnInit {

  @Input() currentCarId: number;

  rentalDetails: RentalDetail[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    if (this.currentCarId) {
      console.log(this.currentCarId);
      this.getAllRentalDetailsByCarId(this.currentCarId);
    }
  }

  getAllRentalDetailsByCarId(carId: number): void {
    console.log(carId);
    this.rentalService.getAllRentalDetailsByCarId(carId).subscribe(response => {
      this.rentalDetails = response.data;
      console.log(response.data);
    })
  }
}
