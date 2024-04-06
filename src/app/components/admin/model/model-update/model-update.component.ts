import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModelDetail } from '../../../../models/details/modelDetail';
import { Brand } from '../../../../models/entities/brand';
import { BrandService } from '../../../../services/concrete/brand.service';
import { ModelService } from '../../../../services/concrete/model.service';


@Component({
  selector: 'app-model-update',
  templateUrl: './model-update.component.html',
  styleUrls: ['./model-update.component.css']
})
export class ModelUpdateComponent implements OnInit {

  modelUpdateForm: FormGroup;
  brands: Brand[] = [];
  modelDetail: ModelDetail;

  constructor(private modelService: ModelService, private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["modelId"]) {
        this.getModelDetailsById(params["modelId"]);
      }
    });
  }

  getModelDetailsById(id: number): void {
    this.modelService.getModelDetailsById(id).subscribe(response => {
      this.modelDetail = response.data;
      this.getAllBrands();
    })
  }


  createModelUpdateForm(): void {
    this.modelUpdateForm = this.formBuilder.group({
      id: [this.modelDetail ? this.modelDetail.id : "", []],
      name: [this.modelDetail ? this.modelDetail.name : "", [Validators.required]],
      brandId: [this.modelDetail ? this.modelDetail.brandId : "", [Validators.required]],
      year: [this.modelDetail ? this.modelDetail.year : "", [Validators.required]]
    });
  }

  updateModel(): void {
    console.log(this.modelUpdateForm.controls['brandId'].value);
    console.log(this.modelUpdateForm.value);
    if (this.modelUpdateForm.valid) {
      this.modelService.update(this.modelUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.modelUpdateForm.controls['name'].value);
        this.router.navigate(["/admin/models/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllBrands(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
      this.createModelUpdateForm();
    })
  }
}
