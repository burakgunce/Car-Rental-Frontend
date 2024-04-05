import { ToastrService } from 'ngx-toastr';
import { BrandService } from './../../../../services/concrete/brand.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(): void {
    this.brandAddForm = this.formBuilder.group({
      name: ["", [Validators.required]],
    });
  }

  addBrand(): void {
    if (this.brandAddForm.valid) {
      this.brandService.add(this.brandAddForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.brandAddForm.controls['name'].value);
        this.router.navigate(["/admin/brands/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.brandAddForm.get('name') }

}
