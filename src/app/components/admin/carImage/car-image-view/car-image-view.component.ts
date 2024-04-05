import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageDetail } from '../../../../models/details/carImageDetail';
import { CarImageService } from '../../../../services/concrete/car-image.service';


@Component({
  selector: 'app-car-image-view',
  templateUrl: './car-image-view.component.html',
  styleUrls: ['./car-image-view.component.css']
})
export class CarImageViewComponent implements OnInit {

  carImageDetail: CarImageDetail;

  constructor(private carImageService: CarImageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carImageId"]) {
        this.getCarImageDetailsById(params["carImageId"]);
      }
    });
  }

  getCarImageDetailsById(id: number): void {
    this.carImageService.getCarImageDetailsById(id).subscribe(response => {
      this.carImageDetail = response.data;
    })
  }

  getCarImage(carImageDetail: CarImageDetail): string {
    return this.carImageService.getCarImage(carImageDetail);
  }
}
