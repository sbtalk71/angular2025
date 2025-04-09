// app.state.ts
import { UserState } from '../app/store/user.reducers';

export interface AppState {
  users: UserState;
}
