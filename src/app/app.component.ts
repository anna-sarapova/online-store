import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private _hotkeysService: HotkeysService, private router:Router) {
        this._hotkeysService.add(new Hotkey('shift+c', (event: KeyboardEvent): boolean => {
            router.navigate(['/category']);
            console.log("I'm working");
            return false; // Prevent bubbling
        }, undefined, 'Go to Home page'));

        this._hotkeysService.add(new Hotkey('shift+h', (event: KeyboardEvent): boolean => {
            router.navigate(['/home']);
            console.log("I'm working");
            return false; // Prevent bubbling
        }, undefined, 'Go to Category page'));

        this._hotkeysService.add(new Hotkey('shift+r', (event: KeyboardEvent): boolean => {
            router.navigate(['/auth/register']);
            console.log("I'm working");
            return false; // Prevent bubbling
        }, undefined, 'Go to Register page'));

        this._hotkeysService.add(new Hotkey('shift+l', (event: KeyboardEvent): boolean => {
            router.navigate(['/auth/login']);
            console.log("I'm working");
            return false; // Prevent bubbling
        }, undefined, 'Go to Login page'));
    }


}
