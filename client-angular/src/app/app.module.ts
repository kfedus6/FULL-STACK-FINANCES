import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from "./pages/home/home.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { TransactionsTableComponent } from "./components/transactions-table/transactions-table.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, HomeComponent, CategoriesComponent, TransactionsFormComponent, TransactionsTableComponent, ProfileComponent, LoginComponent, SignupComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }