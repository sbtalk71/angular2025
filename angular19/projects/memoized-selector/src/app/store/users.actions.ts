// user.actions.ts
import { createAction, props } from '@ngrx/store';

export const toggleUserStatus = createAction(
  '[User] Toggle User Status',
  props<{ userId: number }>()
);

export const updateSettings = createAction(
  '[Settings] Update Settings',
  props<{ theme: string }>()
);
