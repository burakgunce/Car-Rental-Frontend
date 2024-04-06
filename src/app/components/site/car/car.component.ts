import { CarDetail } from '../../../models/details/carDetail';
import { Car } from '../../../models/entities/car';
import { CarService } from '../../../services/concrete/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded: boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
