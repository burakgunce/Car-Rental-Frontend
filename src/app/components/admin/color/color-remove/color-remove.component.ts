import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from '../../../../models/entities/color';
import { ColorService } from '../../../../services/concrete/color.service';


@Component({
  selector: 'app-color-remove',
  templateUrl: './color-remove.component.html',
  styleUrls: ['./color-remove.component.css']
})
export class ColorRemoveComponent implements OnInit {

  constructor(private colorService: ColorService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getColorById(params["colorId"]);
      }
    });
  }

  getColorById(id: number): void {
    this.colorService.getById(id).subscribe(response => {
      this.removeColor(response.data);
    })
  }

  removeColor(color: Color): void {
    this.colorService.delete(color).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/colors/list']);
    });
  }


}
