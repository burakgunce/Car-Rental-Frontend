import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/concrete/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get firstName() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get('lastName') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  // get confirmPassword() { return this.registerForm.get('firstName') }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(response => {
        this.toastrService.info("Başarıyla kullanıcı oluşturuldu, giriş sayfasına yönlendiriliyorsunuz...");
        this.router.navigate(["/login"])
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }
  }

}