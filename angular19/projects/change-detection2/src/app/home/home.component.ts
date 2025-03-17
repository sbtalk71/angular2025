import {Component,Input,Output} from '@angular/core'
import { User } from '../user';
@Component({
    selector: 'home',
    standalone:true,
    template: `

    <newsletter [user]="user" (subscribe)="subscribe($event)"></newsletter>

    <button (click)="changeUserName()">Change User Name</button>

`})
export class HomeComponent {

    user: User = {
        firstName: 'Alice',
        lastName: 'Smith'
    };

    constructor(private newsletterService: NewsletterService) {

    }

    subscribe(email:string) {
        this.newsletterService.subscribe(email);
    }

    changeUserName() {
        this.user.firstName = 'Bob';
    }

}