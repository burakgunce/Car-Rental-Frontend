import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelColorDetail } from '../../../../models/details/modelColorDetail';
import { ModelColorService } from '../../../../services/concrete/model-color.service';


@Component({
  selector: 'app-model-color-view',
  templateUrl: './model-color-view.component.html',
  styleUrls: ['./model-color-view.component.css']
})
export class ModelColorViewComponent implements OnInit {

  modelColorDetail: ModelColorDetail;

  constructor(private modelColorService: ModelColorService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
