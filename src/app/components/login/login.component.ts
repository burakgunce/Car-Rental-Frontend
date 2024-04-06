import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/concrete/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  login() {

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        this.toastrService.info("Başarıyla giriş yaptınız, admin sayfasına yönlendiriliyorsunuz..");
        localStorage.setItem("token", response.data.token);
        this.router.navigate(["/admin"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Formu düzgün doldurunuz");
    }
  }

  redirectToRegister(): void {
    this.router.navigate(["register"])
  }

  // Form Input Check

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

}