import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, signal } from "@angular/core"
import { Router } from "@angular/router";
import { ToastService } from "angular-toastify";
import { IAuthUser, IUser } from "../types/user.interface";
import { API_URL } from "../constants/constants";
import { catchError, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    isAuthSig = signal<boolean>(false)

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly _toastService: ToastService,
    ) {
        const token = localStorage.getItem('token')
        this.isAuthSig.set(!!token)
    }

    signUp(userData: IAuthUser) {
        return this.http.post(`${API_URL}user`, userData)
            .pipe(
                tap(() => {
                    this.login(userData)
                }),
                catchError((err: any) => {
                    this.handeError(err)
                    throw new Error(err.message)
                })
            )
            .subscribe(() => this._toastService.success('Account has been created!'))
    }

    login(userData: IAuthUser) {
        return this.http.post<IUser>(`${API_URL}auth/login`, userData)
            .pipe(
                tap((res: IUser) => {
                    localStorage.setItem('token', res.token)
                    this.isAuthSig.set(true)
                }),
                catchError((err: any) => {
                    this.handeError(err)
                    throw new Error(err.message)
                })
            )
            .subscribe(() => {
                this._toastService.success('You logged in!')
                this.router.navigate(['/home'])
            })
    }

    logout() {
        localStorage.removeItem('token')
        this.isAuthSig.set(false)
        this.router.navigate(['/login'])
        this._toastService.success('You logged out!')
    }

    private handeError(err: HttpErrorResponse): void {
        this._toastService.error(err.error.message)
    }
}