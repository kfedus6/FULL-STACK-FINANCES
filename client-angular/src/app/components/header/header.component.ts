import { Component } from '@angular/core';
import { faArrowRightFromBracket, faDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isAuth = false
    logoutIcon = faArrowRightFromBracket
    loginIcon = faDollar
}