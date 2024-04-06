import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../services/concrete/user.service';
import { UserForInfoDetail } from './../../../../models/details/userForInfoDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: UserForInfoDetail;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userId"]) {
        this.getUserById(params["userId"]);
      }
    });
  }

  getUserById(id: number): void {
    this.userService.getById(id).subscribe(response => {
      this.user = response.data;
    })
  }

}
