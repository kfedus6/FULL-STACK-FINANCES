import { Component } from '@angular/core';
import { faArrowRightFromBracket, faDollar } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    logoutIcon = faArrowRightFromBracket
    loginIcon = faDollar

    constructor(public authService: AuthService) { }

    logoutHandler() {
        this.authService.logout()
    }
}