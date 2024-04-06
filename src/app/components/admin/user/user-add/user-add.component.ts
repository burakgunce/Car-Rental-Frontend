import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../services/concrete/auth.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(): void {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get firstName() { return this.userAddForm.get('firstName') }
  get lastName() { return this.userAddForm.get('lastName') }
  get email() { return this.userAddForm.get('email') }
  get password() { return this.userAddForm.get('password') }
  // get confirmPassword() { return this.userAddForm.get('firstName') }

  addUser(): void {
    if (this.userAddForm.valid) {
      this.authService.register(this.userAddForm.value).subscribe(response => {
        this.toastrService.info("Başarıyla kullanıcı oluşturuldu, giriş sayfasına yönlendiriliyorsunuz...");
        this.router.navigate(["/admin/users/list"])
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }
  }

}
