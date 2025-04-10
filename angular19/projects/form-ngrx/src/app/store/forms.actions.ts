import { createAction, props } from '@ngrx/store';

export const updateName = createAction(
  '[User Form] Update Name',
  props<{ name: string }>()
);

export const updateEmail = createAction(
  '[User Form] Update Email',
  props<{ email: string }>()
);

export const resetForm = createAction('[User Form] Reset');
