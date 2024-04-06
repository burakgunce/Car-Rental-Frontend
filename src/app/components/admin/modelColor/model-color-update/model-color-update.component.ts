import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModelColorDetail } from '../../../../models/details/modelColorDetail';
import { Color } from '../../../../models/entities/color';
import { Model } from '../../../../models/entities/model';
import { ColorService } from '../../../../services/concrete/color.service';
import { ModelColorService } from '../../../../services/concrete/model-color.service';
import { ModelService } from '../../../../services/concrete/model.service';


@Component({
  selector: 'app-model-color-update',
  templateUrl: './model-color-update.component.html',
  styleUrls: ['./model-color-update.component.css']
})
export class ModelColorUpdateComponent implements OnInit {

  modelColorUpdateForm: FormGroup;
  models: Model[] = [];
  colors: Color[] = [];
  modelColorDetail: ModelColorDetail;

  constructor(private modelColorService: ModelColorService, private modelService: ModelService, private colorService: ColorService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["modelColorId"]) {
        this.getModelColorDetailsById(params["modelColorId"]);
      }
    });
  }

  getModelColorDetailsById(id: number): void {
    this.modelColorService.getModelColorDetailsById(id).subscribe(response => {
      this.modelColorDetail = response.data;
      this.getAllModels();
    })
  }

  createModelColorUpdateForm(): void {
    this.modelColorUpdateForm = this.formBuilder.group({
      id: [this.modelColorDetail ? this.modelColorDetail.id : "", []],
      modelId: [this.modelColorDetail ? this.modelColorDetail.modelId : "", [Validators.required]],
      colorId: [this.modelColorDetail ? this.modelColorDetail.colorId : "", [Validators.required]]
    });
  }

  updateModelColor(): void {
    console.log(this.modelColorUpdateForm.value);
    if (this.modelColorUpdateForm.valid) {
      this.modelColorService.update(this.modelColorUpdateForm.value).subscribe(response => {
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
      this.getAllColors();
    })
  }

  getAllColors(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
      this.createModelColorUpdateForm();
    })
  }


}
