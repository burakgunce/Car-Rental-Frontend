import { Color } from '../../../models/entities/color';
import { ColorService } from '../../../services/concrete/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor: Color;
  filterText: string;
  viewAllColor: boolean = true;
  viewCurrentColor: boolean = false;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color): void {
    this.currentColor = color;
  }

  setViewCurrentColor() {
    this.viewCurrentColor = true;
  }

  abortViewCurrentColor() {
    this.viewCurrentColor = false;
  }

  setViewAllColor() {
    this.viewAllColor = true;
  }

  abortViewAllColor() {
    this.viewAllColor = false;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor && this.viewCurrentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllColorClass() {
    if (this.viewAllColor) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }


}
