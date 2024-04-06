import { Router } from '@angular/router';
import { ColorService } from './../../../../services/concrete/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from '../../../../models/entities/color';


@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors: Color[] = [];
  filterText: string = "";

  constructor(private colorService: ColorService, private router: Router) { }

  ngOnInit(): void {
    this.getAllColors();
  }

  getAllColors(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    })
  }

  getColorViewById(colorId: number): void {
    this.router.navigate(["/admin/colors/view/" + colorId]);
  }

}
