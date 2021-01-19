import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LinkModel } from '../../../core/models/link.model';
import { SpeechService } from '../../../core/services/speech.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SpeechService implements OnInit {
    public links: LinkModel[];

    constructor(public authService: AuthService,
                private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.initLinks();
    }

    private initLinks(): void {
        this.links = [
            { name: 'Home', route: '/home' },
            { name: 'Categories', route: '/category' },
        ];
    }

    public onLogOut(): void {
        this.authService.setLocalUserData = null;
        if (this.router.url === '/home/cart') {
            window.location.reload();
        }
        localStorage.clear();
    }
}
