import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Color } from '../../../../models/entities/color';
import { ColorService } from '../../../../services/concrete/color.service';


@Component({
  selector: 'app-color-view',
  templateUrl: './color-view.component.html',
  styleUrls: ['./color-view.component.css']
})
export class ColorViewComponent implements OnInit {

  color: Color;

  constructor(private colorService: ColorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getColorById(params["colorId"]);
      }
    });
  }

  getColorById(id: number): void {
    this.colorService.getById(id).subscribe(response => {
      this.color = response.data;
    })
  }

}
