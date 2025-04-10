import { createReducer, on } from '@ngrx/store';
import * as FormActions from '../store/forms.actions';

export interface UserFormState {
  name: string;
  email: string;
}

export const initialState: UserFormState = {
  name: '',
  email: ''
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.updateName, (state, { name }) => ({ ...state, name })),
  on(FormActions.updateEmail, (state, { email }) => ({ ...state, email })),
  on(FormActions.resetForm, () => initialState)
);
