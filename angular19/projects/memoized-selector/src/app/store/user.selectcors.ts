// user.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../store/user.reducers';
import { User } from '../user.model';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectActiveUsers = createSelector(
  selectAllUsers,
  (users) => {
    console.log('selectActiveUsers recomputed');
    return users.filter(user => user.isActive);
  }
);

//non memoized selector
export function getActiveUsersManually(state: any): User[] {
  console.log('Non-memoized active user selector');
  return state.users.users.filter((user: User) => user.isActive);
}

