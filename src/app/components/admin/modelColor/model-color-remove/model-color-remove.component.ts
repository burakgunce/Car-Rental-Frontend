import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModelColor } from '../../../../models/entities/modelColor';
import { ModelColorService } from '../../../../services/concrete/model-color.service';


@Component({
  selector: 'app-model-color-remove',
  templateUrl: './model-color-remove.component.html',
  styleUrls: ['./model-color-remove.component.css']
})
export class ModelColorRemoveComponent implements OnInit {

  constructor(private modelColorService: ModelColorService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["modelColorId"]) {
        this.getModelColorById(params["modelColorId"]);
      }
    });
  }

  getModelColorById(id: number): void {
    this.modelColorService.getById(id).subscribe(response => {
      this.removeModelColor(response.data);
    })
  }

  removeModelColor(modelColor: ModelColor): void {
    this.modelColorService.delete(modelColor).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/modelColors/list']);
    });
  }

}
