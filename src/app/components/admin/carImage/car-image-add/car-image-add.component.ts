import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../../../../models/details/carDetail';
import { CarImageService } from '../../../../services/concrete/car-image.service';
import { CarService } from '../../../../services/concrete/car.service';


@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {

  carImageAddForm: FormGroup;
  carDetails: CarDetail[] = [];
  fileName: string = "";

  constructor(private carImageService: CarImageService, private carService: CarService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createCarImageAddForm();
    this.getAllCars();
  }

  createCarImageAddForm(): void {
    this.carImageAddForm = this.formBuilder.group({
      carId: ["", [Validators.required]],
      file: ["", [Validators.required]]
    });
  }

  addCarImage(): void {
    console.log(this.carImageAddForm.value);
    if (this.carImageAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.carImageAddForm.get('file')?.value);
      formData.append("carId", this.carImageAddForm.get('carId')?.value);
      this.carImageService.add(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/carimages/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllCars(): void {
    this.carService.getAllCarDetails().subscribe(response => {
      this.carDetails = response.data;
    })
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.carImageAddForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

  get name() { return this.carImageAddForm.get('name') }
  get carName() { return this.carImageAddForm.get('carName') }

}
