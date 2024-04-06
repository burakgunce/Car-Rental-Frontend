import { ToastrService } from 'ngx-toastr';
import { ModelService } from './../../../../services/concrete/model.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../../../../models/entities/brand';
import { BrandService } from '../../../../services/concrete/brand.service';


@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  modelAddForm: FormGroup;
  brands: Brand[] = [];

  constructor(private modelService: ModelService, private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createModelAddForm();
    this.getAllBrands();
  }

  createModelAddForm(): void {
    this.modelAddForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      brandId: ["", [Validators.required]],
      year: ["", [Validators.required]]
    });
  }

  addModel(): void {
    console.log(this.modelAddForm.controls['brandId'].value);
    console.log(this.modelAddForm.value);
    if (this.modelAddForm.valid) {
      this.modelService.add(this.modelAddForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.modelAddForm.controls['name'].value);
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
    })
  }

  get name() { return this.modelAddForm.get('name') }
  get brandName() { return this.modelAddForm.get('brandName') }

}
