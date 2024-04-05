import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../../models/details/carDetail';
import { CarService } from '../../../../services/concrete/car.service';


@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {

  carDetail: CarDetail;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"]);
      }
    });
  }

  getCarDetailsById(id: number): void {
    this.carService.getCarDetailsById(id).subscribe(response => {
      this.carDetail = response.data;
    })
  }

  getCarImage(carDetail: CarDetail): string {
    return this.carService.getCarImage(carDetail);
  }

}
