import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentalDetail } from '../../../models/details/rentalDetail';
import { RentalService } from '../../../services/concrete/rental.service';


@Component({
  selector: 'app-last-rental-list',
  templateUrl: './last-rental-list.component.html',
  styleUrls: ['./last-rental-list.component.css']
})
export class LastRentalListComponent implements OnInit {

  rentalDetails: RentalDetail[] = [];
  filterText: string = "";

  constructor(private rentalService: RentalService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRentalDetails();
  }

  getAllRentalDetails(): void {
    this.rentalService.getAllRentalDetails().subscribe(response => {
      this.rentalDetails = response.data.reverse().slice(0, 5);
    })
  }

  getRentalDetailViewById(rentalId: number): void {
    this.router.navigate(["/admin/rentals/view/" + rentalId]);
  }

  getRentalImage(rentalDetail: RentalDetail): string {
    return this.rentalService.getRentalImage(rentalDetail);
  }
}
