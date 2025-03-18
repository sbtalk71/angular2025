import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditComponent } from '../pages/edit/edit.component';


@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<any> {
  canDeactivate(
    component: any)
   {
    if (component && component?.profileData && component?.profileData?.dirty) {
      
      const confirmation = confirm('You have some unsaved detaials. Are you sure to go back from class guard?');
      if (confirmation) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
