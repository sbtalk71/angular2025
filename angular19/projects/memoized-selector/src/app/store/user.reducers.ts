// user.reducer.ts
import { createReducer, on } from '@ngrx/store';

import { toggleUserStatus } from '../store/users.actions';
import { User } from '../user.model';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Carol', isActive: true }
  ]
};

export const userReducer = createReducer(
  initialState,
  on(toggleUserStatus, (state, { userId }) => ({
    ...state,
    users: state.users.map(user =>
      user.id === userId ? { ...user, isActive: !user.isActive } : user
    )
  }))
);
