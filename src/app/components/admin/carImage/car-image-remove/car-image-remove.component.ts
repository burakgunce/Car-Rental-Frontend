import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from '../../../../models/entities/carImage';
import { CarImageService } from '../../../../services/concrete/car-image.service';


@Component({
  selector: 'app-car-image-remove',
  templateUrl: './car-image-remove.component.html',
  styleUrls: ['./car-image-remove.component.css']
})
export class CarImageRemoveComponent implements OnInit {

  constructor(private carImageService: CarImageService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carImageId"]) {
        this.getCarImageById(params["carImageId"]);
      }
    });
  }

  getCarImageById(id: number): void {
    this.carImageService.getById(id).subscribe(response => {
      this.removeCarImage(response.data);
    })
  }

  removeCarImage(carImage: CarImage): void {
    this.carImageService.delete(carImage).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/carImages/list']);
    });
  }

}
