import { Brand } from '../../../models/entities/brand';
import { BrandService } from '../../../services/concrete/brand.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand: Brand;
  filterText: string;
  viewAllBrand: boolean = true;
  viewCurrentBrand: boolean = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand): void {
    this.currentBrand = brand;
  }

  setViewCurrentBrand() {
    this.viewCurrentBrand = true;
  }

  abortViewCurrentBrand() {
    this.viewCurrentBrand = false;
  }

  setViewAllBrand() {
    this.viewAllBrand = true;
  }

  abortViewAllBrand() {
    this.viewAllBrand = false;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand && this.viewCurrentBrand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllBrandClass() {
    if (this.viewAllBrand) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }


}
