import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ChildGuard implements CanActivateChild {
  canActivateChild(): boolean {
    return confirm('Do you have access to child routes?');
  }
}
