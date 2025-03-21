import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-auth',
  imports:[CommonModule],
  standalone: true,
  template: `
    <button *ngIf="!isAuthenticated()" (click)="login()">Login</button>
    <button *ngIf="isAuthenticated()" (click)="logout()">Logout</button>
    <p *ngIf="isAuthenticated()">Welcome, {{ userName() }}</p>
  `
})
export class AuthComponent {
  private msalService = inject(MsalService);
  userName = signal<string | null>(null);

  constructor() {
    this.setUserInfo();
  }

  login() {
    this.msalService.loginPopup().subscribe((result: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(result.account);
      this.setUserInfo();
    });
  }

  logout() {
    this.msalService.logoutPopup();
    this.userName.set(null);
  }

  isAuthenticated() {
    return !!this.msalService.instance.getActiveAccount();
  }

  private setUserInfo() {
    const account = this.msalService.instance.getActiveAccount();
    this.userName.set(account ? account.username : null);
  }
}
