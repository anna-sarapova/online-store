import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginFormGroup: FormGroup;
  private loginSubscription: Subscription;
  jwtHelper = new JwtHelperService();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  private createLoginForm(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  public onLogin(): void {
    this.loginSubscription = this.authService.login(this.loginFormGroup.value).subscribe(result => {
      localStorage.setItem('user', JSON.stringify(result));
      localStorage.setItem('userid', this.jwtHelper.decodeToken(result.token).nameid);
      this.authService.setLocalUserData = result;
      this.router.navigate(['/home']);
    }, error => console.log(error));
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  get email(): AbstractControl {
    return this.loginFormGroup.get('email');
  }

  get password(): AbstractControl {
    return this.loginFormGroup.get('password');
  }
}
