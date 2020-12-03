import {Component, OnInit} from '@angular/core';
import {LinkModel} from "../../../core/models/link.model";
import {SpeechService} from "../../../core/services/speech.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SpeechService implements OnInit {
    public links: LinkModel[];

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.initLinks();
    }

    private initLinks(): void {
        this.links = [
            {name: 'Home', route: '/home'},
            {name: 'Categories'},
            {name: 'Offers'},
            {name: 'Contacts'}
        ];
    }

}
