import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { unsavedGuard } from './unsaved.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:DashboardComponent},
    {path:'edit' ,component:EditComponent,canDeactivate:[unsavedGuard]},
        {path:'home',component:HomeComponent}

];
