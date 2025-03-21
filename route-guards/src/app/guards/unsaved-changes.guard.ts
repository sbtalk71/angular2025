import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { EditComponent } from '../pages/edit/edit.component';



export const unsavedChangesGuard:CanDeactivateFn<EditComponent>=(component:EditComponent) =>{
  
   return component.canExit();
  }

