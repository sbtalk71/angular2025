import { signalStore, withState, withMethods,patchState } from '@ngrx/signals';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserStore = signalStore(
  { 
    providedIn: 'root' 
  },
  withState<{ users: User[] }>({ users: [] }),
  withMethods(store => ({
    addUser(user: User) {
      //store.users.set([...store.users(), user]);
      patchState(store,{users:[...store.users(),user]})
    },
    updateUser(updatedUser: User) {
      patchState(store,{users:store.users().map(u => u.id === updatedUser.id ? updatedUser : u)});
    },
    deleteUser(id: number) {
      patchState(store,{users:store.users().filter(u => u.id !== id)});
    }
  }))
);
