import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../models/entities/brand';
import { BrandService } from '../../../../services/concrete/brand.service';


@Component({
  selector: 'app-brand-remove',
  templateUrl: './brand-remove.component.html',
  styleUrls: ['./brand-remove.component.css']
})
export class BrandRemoveComponent implements OnInit {

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getBrandById(params["brandId"]);
      }
    });
  }

  getBrandById(id: number): void {
    this.brandService.getById(id).subscribe(response => {
      this.removeBrand(response.data);
    })
  }

  removeBrand(brand: Brand): void {
    this.brandService.delete(brand).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/brands/list']);
    });
  }
}
