import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModelDetail } from '../../../../models/details/modelDetail';
import { ModelService } from '../../../../services/concrete/model.service';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.css']
})
export class ModelViewComponent implements OnInit {

  modelDetail: ModelDetail;

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
