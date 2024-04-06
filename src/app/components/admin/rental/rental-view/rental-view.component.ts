import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RentalDetail } from '../../../../models/details/rentalDetail';
import { RentalService } from '../../../../services/concrete/rental.service';


@Component({
  selector: 'app-rental-view',
  templateUrl: './rental-view.component.html',
  styleUrls: ['./rental-view.component.css']
})
export class RentalViewComponent implements OnInit {

  rentalDetail: RentalDetail;

  constructor(private rentalService: RentalService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
