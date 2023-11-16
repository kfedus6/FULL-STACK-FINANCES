import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularToastifyModule, ToastService } from "angular-toastify";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { TransactionsTableComponent } from "./components/transactions-table/transactions-table.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        CategoriesComponent,
        TransactionsFormComponent,
        TransactionsTableComponent,
        ProfileComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        AngularToastifyModule,
        HttpClientModule,
        NgxPaginationModule,
    ],
    providers: [
        ToastService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }