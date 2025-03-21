import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { AdminLoadGuard } from './guards/admin-load.guard';
import { ChildGuard } from './guards/child.guard';
import { DataResolver } from './guards/resolve.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/edit/edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { inject } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: EditComponent, canDeactivate: [() => inject(unsavedChangesGuard).canDeactivate] },
  { 
    path: 'dashboard', 
    component: HomeComponent, 
    canActivate: [AuthGuard], 
    canActivateChild: [ChildGuard] 
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent), 
    canLoad: [AdminLoadGuard] 
  },
  { path: '**', redirectTo: '' }
];


