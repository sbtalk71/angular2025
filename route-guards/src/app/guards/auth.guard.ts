import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

//@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private router = inject(Router);

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('user'); // Simulated authentication check
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
