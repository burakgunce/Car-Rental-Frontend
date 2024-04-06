import { CarService } from '../../../services/concrete/car.service';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../../models/details/carDetail';

@Component({
  selector: 'app-car-detail-menu',
  templateUrl: './car-detail-menu.component.html',
  styleUrls: ['./car-detail-menu.component.css']
})
export class CarDetailMenuComponent implements OnInit {

  carDetails: CarDetail[] = [];

  filterText: string = "";

  selectedBrandId: number;
  selectedColorId: number;
  minDailyPrice: number;
  maxDailyPrice: number;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']) {
        this.getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(params["brandId"], params['colorId'], params['minDailyPrice'], params['maxDailyPrice']);
      } else if (params["brandId"]) {
        this.getAllCarDetailsByBrandId(params["brandId"]);
      } else if (params["colorId"]) {
        this.getAllCarDetailsByColorId(params["colorId"])
      } else {
        this.getAllCarDetails();
      }
    });
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getAllCarDetailsByBrandId(cardetailId: number): void {
    this.carService.getAllCarDetailsByBrandId(cardetailId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getAllCarDetailsByColorId(colorId: number): void {
    this.carService.getAllCarDetailsByColorId(colorId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarImage(carDetail: CarDetail): string {
    return this.carService.getCarImage(carDetail);
  }

  getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId: number, colorId: number, minDailyPrice: number, maxDailyPrice: number): void {
    this.carService.getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId, colorId, minDailyPrice, maxDailyPrice).subscribe(response => {
      this.selectedBrandId = brandId;
      this.selectedColorId = colorId;
      this.minDailyPrice = minDailyPrice;
      this.maxDailyPrice = maxDailyPrice;
      this.carDetails = response.data;
    })
  }
}
