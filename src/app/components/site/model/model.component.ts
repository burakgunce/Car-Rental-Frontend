import { Component, OnInit } from '@angular/core';
import { ModelDetail } from '../../../models/details/modelDetail';
import { Model } from '../../../models/entities/model';
import { ModelService } from '../../../services/concrete/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})

export class ModelComponent implements OnInit {

  models: Model[] = [];
  modelDetails: ModelDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
  }

  getAll(): void {
    this.modelService.getAll().subscribe(response => {
      this.models = response.data;
      this.dataLoaded = true;
    });
  }

  getAllModelDetails(): void {
    this.modelService.getAllModelDetails().subscribe(response => {
      this.modelDetails = response.data;
      this.dataLoaded = true;
    });
  }

}
