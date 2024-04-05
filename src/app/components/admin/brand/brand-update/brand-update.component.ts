import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from '../../../../models/entities/brand';
import { BrandService } from '../../../../services/concrete/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm: FormGroup;
  brand: Brand;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getBrandById(params["brandId"]);
      }
    });
  }

  createBrandUpdateForm(): void {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.brand ? this.brand.id : ""],
      name: [this.brand ? this.brand.name : "", [Validators.required]],
    });
  }

  getBrandById(id: number): void {
    this.brandService.getById(id).subscribe(response => {
      this.brand = response.data;
      this.createBrandUpdateForm();
    })
  }

  updateBrand(): void {
    if (this.brandUpdateForm.valid) {
      this.brandService.update(this.brandUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.brandUpdateForm.controls['name'].value);
        this.router.navigate(["/admin/brands/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.brandUpdateForm.get('name') }

}
