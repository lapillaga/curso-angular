import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../shared/services/login/login.service";
import {LoginResponse} from "../../model/login";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup | undefined;
  inputType = 'password';
  visible = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['admin@pichincha.com', Validators.required],
      password: ['admin', [Validators.required, Validators.min(6)]]
    });
  }

  login() {
    if (this.form?.invalid) {
      return;
    }

    this.loginService.login(this.form?.value)
      .subscribe((res: LoginResponse) => {
          if (res.status === 'success') {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('user', JSON.stringify(res.data.user));
            this.router.navigate(['/home']);
          } else {
            this.snackbar.open(res.message, '', {
              duration: 2000,
              verticalPosition: 'bottom'
            });
          }
        },
        (err: HttpErrorResponse) => {
          this.snackbar.open(err.message, '', {
            duration: 2000,
            panelClass: ['error-snackbar']
          });
        }
      );
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
