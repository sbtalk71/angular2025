import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserFormState } from '../store/forms.reducers';

export const selectForm = createFeatureSelector<UserFormState>('userForm');

export const selectName = createSelector(selectForm, (state) => state.name);
export const selectEmail = createSelector(selectForm, (state) => state.email);
