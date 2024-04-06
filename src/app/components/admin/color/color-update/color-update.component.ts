import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from '../../../../models/entities/color';
import { ColorService } from '../../../../services/concrete/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm: FormGroup;
  color: Color;

  constructor(private colorService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getColorById(params["colorId"]);
      }
    });
  }

  createColorUpdateForm(): void {
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.color ? this.color.id : ""],
      name: [this.color ? this.color.name : "", [Validators.required]],
    });
  }

  getColorById(id: number): void {
    this.colorService.getById(id).subscribe(response => {
      this.color = response.data;
      this.createColorUpdateForm();
    })
  }

  updateColor(): void {
    if (this.colorUpdateForm.valid) {
      this.colorService.update(this.colorUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message, this.colorUpdateForm.controls['name'].value);
        this.router.navigate(["/admin/colors/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  get name() { return this.colorUpdateForm.get('name') }

}
