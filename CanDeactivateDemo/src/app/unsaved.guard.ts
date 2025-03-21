import { CanDeactivateFn } from '@angular/router';
import { EditComponent } from './edit/edit.component';

export const unsavedGuard: CanDeactivateFn<EditComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canExit();
};
