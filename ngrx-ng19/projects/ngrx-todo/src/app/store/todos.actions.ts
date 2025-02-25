import { createAction,props } from "@ngrx/store";


const addTodo=createAction("[ToDo] add",props<{text:string}>())
const toggleToDo=createAction("[ToDo] toggle",props<{id:number}>())
const removeToDo=createAction("[ToDo] add",props<{id:number}>())