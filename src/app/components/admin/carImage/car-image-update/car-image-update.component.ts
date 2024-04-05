import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../../../../models/details/carDetail';
import { CarImageDetail } from '../../../../models/details/carImageDetail';
import { CarImageService } from '../../../../services/concrete/car-image.service';
import { CarService } from '../../../../services/concrete/car.service';


@Component({
  selector: 'app-car-image-update',
  templateUrl: './car-image-update.component.html',
  styleUrls: ['./car-image-update.component.css']
})
export class CarImageUpdateComponent implements OnInit {

  carImageUpdateForm: FormGroup;
  carDetails: CarDetail[] = [];
  fileName: string = "";
  carImageDetail: CarImageDetail;

  constructor(private carImageService: CarImageService, private carService: CarService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
      this.getAllCars();
    })
  }

  getCarImage(carImageDetail: CarImageDetail): string {
    return this.carImageService.getCarImage(carImageDetail);
  }

  createCarImageUpdateForm(): void {
    this.carImageUpdateForm = this.formBuilder.group({
      id: [this.carImageDetail ? this.carImageDetail.id : ""],
      imagePath: [this.carImageDetail ? this.carImageDetail.imagePath : ""],
      carId: [this.carImageDetail ? this.carImageDetail.carId : "", [Validators.required]],
      file: [this.carImageDetail ? this.carImageDetail.imagePath : "", [Validators.required]]
    });
  }

  updateCarImage(): void {
    console.log(this.carImageUpdateForm.value);
    if (this.carImageUpdateForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.carImageUpdateForm.get('file')?.value);
      formData.append("id", this.carImageUpdateForm.get('id')?.value);
      formData.append("imagePath", this.carImageUpdateForm.get('imagePath')?.value);
      formData.append("carId", this.carImageUpdateForm.get('carId')?.value);
      this.carImageService.update(formData).subscribe(response => {
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
      this.createCarImageUpdateForm();
    })
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.carImageUpdateForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

}
