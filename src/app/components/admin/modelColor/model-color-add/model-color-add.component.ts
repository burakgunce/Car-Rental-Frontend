import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Color } from '../../../../models/entities/color';
import { Model } from '../../../../models/entities/model';
import { ColorService } from '../../../../services/concrete/color.service';
import { ModelColorService } from '../../../../services/concrete/model-color.service';
import { ModelService } from '../../../../services/concrete/model.service';

@Component({
  selector: 'app-model-color-add',
  templateUrl: './model-color-add.component.html',
  styleUrls: ['./model-color-add.component.css']
})
export class ModelColorAddComponent implements OnInit {

  modelColorAddForm: FormGroup;
  models: Model[] = [];
  colors: Color[] = [];

  constructor(private modelColorService: ModelColorService, private modelService: ModelService, private colorService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createModelColorAddForm();
    this.getAllModels();
    this.getAllColors();
  }

  createModelColorAddForm(): void {
    this.modelColorAddForm = this.formBuilder.group({
      modelId: ["", [Validators.required]],
      colorId: ["", [Validators.required]]
    });
  }

  addModelColor(): void {
    console.log(this.modelColorAddForm.value);
    if (this.modelColorAddForm.valid) {
      this.modelColorService.add(this.modelColorAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/modelcolors/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllModels(): void {
    this.modelService.getAll().subscribe(response => {
      this.models = response.data;
    })
  }

  getAllColors(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    })
  }

  get name() { return this.modelColorAddForm.get('name') }
  get brandName() { return this.modelColorAddForm.get('brandName') }

}
