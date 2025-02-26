import { createAction,props } from "@ngrx/store";


export const addTodo=createAction("[ToDo] add",props<{text:string}>())
export const toggleToDo=createAction("[ToDo] toggle",props<{id:number}>())
export const removeToDo=createAction("[ToDo] add",props<{id:number}>())