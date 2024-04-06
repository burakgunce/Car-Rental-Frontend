import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../../../services/concrete/color.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;

  constructor(private colorService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(): void {
    this.colorAddForm = this.formBuilder.group({
      name: ["", [Validators.required]],
    });
  }

  addColor(): void {
    if (this.colorAddForm.valid) {
      this.colorService.add(this.colorAddForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.colorAddForm.controls['name'].value);
        this.router.navigate(["/admin/colors/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.colorAddForm.get('name') }

}
