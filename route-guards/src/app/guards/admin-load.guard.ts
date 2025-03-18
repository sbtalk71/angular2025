import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminLoadGuard implements CanLoad {
  canLoad(): boolean {
    return confirm('Are you an admin?');
  }
}
