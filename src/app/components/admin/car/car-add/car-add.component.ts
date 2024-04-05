import { ModelColorDetail } from './../../../../models/details/modelColorDetail';
import { Model } from './../../../../models/entities/model';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../../../services/concrete/car.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelColorService } from '../../../../services/concrete/model-color.service';


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  modelColorDetails: ModelColorDetail[] = [];

  constructor(private carService: CarService, private modelColorService: ModelColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getAllModelColorDetails();
  }

  createCarAddForm(): void {
    this.carAddForm = this.formBuilder.group({
      modelColorId: ["", [Validators.required]],
      dailyPrice: ["", [Validators.required]],
      description: ["", [Validators.required]],
    });
  }

  addCar(): void {
    console.log(this.carAddForm.value);
    if (this.carAddForm.valid) {
      this.carService.add(this.carAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/cars/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllModelColorDetails(): void {
    this.modelColorService.getAllModelColorDetails().subscribe(response => {
      this.modelColorDetails = response.data;
    })
  }



  get name() { return this.carAddForm.get('name') }
  get modelName() { return this.carAddForm.get('modelName') }

}
