import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Subscription} from "rxjs";
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
    public registerFormGroup: FormGroup;
    private registerSubscription: Subscription;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) {
        this.createRegisterForm();
    }

    ngOnInit(): void {
    }

    private createRegisterForm(): void {
        this.registerFormGroup = this.formBuilder.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    public onRegister(): void {
        this.registerSubscription = this.authService.register(this.registerFormGroup.value).subscribe(() => {
            console.log('success');
        }, error => console.log(error));
        this.router.navigate(['/auth/login']);
    }

    ngOnDestroy() {
        if (this.registerSubscription) {
            this.registerSubscription.unsubscribe();
        }
    }

    get email(): AbstractControl {
        return this.registerFormGroup.get('email');
    }

    get password(): AbstractControl {
        return this.registerFormGroup.get('password')
    }


}
