import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'users', loadComponent: () => import('./pages/user-list/user-list.component').then(m => m.UserListComponent) },
  { path: 'users/add', loadComponent: () => import('./pages/add-user/add-user.component').then(m => m.AddUserComponent) },
  { path: 'users/:id', loadComponent: () => import('./pages/user-details/user-details.component').then(m => m.UserDetailsComponent) },
  { path: 'users/edit/:id', loadComponent: () => import('./pages/edit-user/edit-user.component').then(m => m.EditUserComponent) },
  { path: 'users/delete/:id', loadComponent: () => import('./pages/delete-user/delete-user.component').then(m => m.DeleteUserComponent) }
];
