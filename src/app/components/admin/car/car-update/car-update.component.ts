import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../../../../models/details/carDetail';
import { ModelColorDetail } from '../../../../models/details/modelColorDetail';
import { CarService } from '../../../../services/concrete/car.service';
import { ModelColorService } from '../../../../services/concrete/model-color.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm: FormGroup;
  modelColorDetails: ModelColorDetail[] = [];
  carDetail: CarDetail;

  constructor(private carService: CarService, private modelColorService: ModelColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsById(params["carId"]);
      }
    });
  }


  createCarUpdateForm(): void {
    this.carUpdateForm = this.formBuilder.group({
      id: [this.carDetail ? this.carDetail.id : ""],
      modelColorId: [this.carDetail ? this.carDetail.modelColorId : "", [Validators.required]],
      dailyPrice: [this.carDetail ? this.carDetail.dailyPrice : 0, [Validators.required]],
      description: [this.carDetail ? this.carDetail.description : "", [Validators.required]],
    });
  }

  updateCar(): void {
    console.log(this.carUpdateForm.value);
    if (this.carUpdateForm.valid) {
      this.carService.update(this.carUpdateForm.value).subscribe(response => {
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

  getCarDetailsById(id: number): void {
    this.carService.getCarDetailsById(id).subscribe(response => {
      this.carDetail = response.data;
      this.getAllModelColorDetails();
    })
  }

  getAllModelColorDetails(): void {
    this.modelColorService.getAllModelColorDetails().subscribe(response => {
      this.modelColorDetails = response.data;
      this.createCarUpdateForm();
    })
  }
}
