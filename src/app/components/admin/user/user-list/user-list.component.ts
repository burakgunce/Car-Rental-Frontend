import { UserForInfoDetail } from './../../../../models/details/userForInfoDetail';
import { Router } from '@angular/router';
import { UserService } from './../../../../services/concrete/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserForInfoDetail[] = [];
  firstNameFilterText: string = "";
  lastNameFilterText: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response.data;
    })
  }

  getUserViewById(userId: number): void {
    this.router.navigate(["/admin/users/view/" + userId]);
  }

}
