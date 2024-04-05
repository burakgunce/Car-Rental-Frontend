import { Router } from '@angular/router';
import { CarService } from './../../../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../../../models/details/carDetail';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carDetails: CarDetail[] = [];
  filterText: string = "";

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCarDetails();
  }

  getAllCarDetails(): void {
    this.carService.getAllCarDetails().subscribe(response => {
      this.carDetails = response.data;
    })
  }

  getCarDetailViewById(carId: number): void {
    this.router.navigate(["/admin/cars/view/" + carId]);
  }

  getCarImage(carDetail: CarDetail): string {
    return this.carService.getCarImage(carDetail);
  }

}
