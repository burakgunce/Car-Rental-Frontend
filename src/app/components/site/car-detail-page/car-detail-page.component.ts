import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../../models/details/carDetail';
import { CarService } from '../../../services/concrete/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetail: CarDetail;
  dataLoaded: boolean = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailsById(params["carId"]);
    });
  }

  getCarDetailsById(id: number): void {
    this.carService.getCarDetailsById(id).subscribe(response => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    })
  }

  getCarImage(carDetail: CarDetail): string {
    return this.carService.getCarImage(carDetail);
  }

  getCarImages(carDetail: CarDetail): string[] {
    return this.carService.getCarImages(carDetail);
  }
}
