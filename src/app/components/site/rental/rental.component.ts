import { Component, OnInit } from '@angular/core';
import { RentalDetail } from '../../../models/details/rentalDetail';
import { Rental } from '../../../models/entities/rental';
import { RentalService } from '../../../services/concrete/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})

export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  rentalDetails: RentalDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.rentalService.getAll().subscribe(response => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  getAllRentalDetails(): void {
    this.rentalService.getAllRentalDetails().subscribe(response => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }

}