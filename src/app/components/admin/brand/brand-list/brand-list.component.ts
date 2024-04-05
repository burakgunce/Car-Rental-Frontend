import { Router } from '@angular/router';
import { BrandService } from './../../../../services/concrete/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../models/entities/brand';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [];
  filterText: string = "";

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
    })
  }

  getBrandViewById(brandId: number): void {
    this.router.navigate(["/admin/brands/view/" + brandId]);
  }

}
