import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Model } from '../../../../models/entities/model';
import { ModelService } from '../../../../services/concrete/model.service';


@Component({
  selector: 'app-model-remove',
  templateUrl: './model-remove.component.html',
  styleUrls: ['./model-remove.component.css']
})
export class ModelRemoveComponent implements OnInit {

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["modelId"]) {
        this.getModelById(params["modelId"]);
      }
    });
  }

  getModelById(id: number): void {
    this.modelService.getById(id).subscribe(response => {
      this.removeModel(response.data);
    })
  }

  removeModel(model: Model): void {
    this.modelService.delete(model).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/models/list']);
    });
  }

}
