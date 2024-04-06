import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelColorDetail } from '../../../../models/details/modelColorDetail';
import { ModelColorService } from '../../../../services/concrete/model-color.service';


@Component({
  selector: 'app-model-color-list',
  templateUrl: './model-color-list.component.html',
  styleUrls: ['./model-color-list.component.css']
})
export class ModelColorListComponent implements OnInit {

  modelColorDetails: ModelColorDetail[] = [];
  filterText: string = "";

  constructor(private modelColorService: ModelColorService, private router: Router) { }

  ngOnInit(): void {
    this.getAllModelColorDetails();
  }

  getAllModelColorDetails(): void {
    this.modelColorService.getAllModelColorDetails().subscribe(response => {
      this.modelColorDetails = response.data;
    })
  }

  getModelColorDetailViewById(modelColorId: number): void {
    this.router.navigate(["/admin/modelcolors/view/" + modelColorId]);
  }
}
