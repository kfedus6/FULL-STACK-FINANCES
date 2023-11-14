import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignupComponent {
    userData: FormGroup

    constructor(private _toastService: ToastService) {
        this.userData = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        })
    }

    onSubmit() {
        if (this.userData.valid) {
            console.log(this.userData.value)
        } else {
            this._toastService.error('not valid')
        }
    }
}
