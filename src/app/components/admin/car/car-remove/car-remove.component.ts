import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../../../models/entities/car';
import { CarService } from '../../../../services/concrete/car.service';


@Component({
  selector: 'app-car-remove',
  templateUrl: './car-remove.component.html',
  styleUrls: ['./car-remove.component.css']
})
export class CarRemoveComponent implements OnInit {

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarById(params["carId"]);
      }
    });
  }

  getCarById(id: number): void {
    this.carService.getById(id).subscribe(response => {
      this.removeCar(response.data);
    })
  }

  removeCar(car: Car): void {
    this.carService.delete(car).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/cars/list']);
    });
  }

}
