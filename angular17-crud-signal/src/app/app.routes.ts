import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'users', loadComponent: () => import('./pages/user-list/user-list.component').then(m => m.UserListComponent) },
  { path: 'users/add', loadComponent: () => import('./pages/add-user/add-user.component').then(m => m.AddUserComponent) },
  { path: 'users/edit/:id', loadComponent: () => import('./pages/edit-user/edit-user.component').then(m => m.EditUserComponent) },
  { path: 'users/:id', loadComponent: () => import('./pages/user-details/user-details.component').then(m => m.UserDetailsComponent) },
];
