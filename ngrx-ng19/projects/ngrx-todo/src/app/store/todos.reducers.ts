import { createReducer, on } from "@ngrx/store";
import {addTodo,removeToDo,toggleToDo} from "./todos.actions"

export interface ToDo{
    id:number;
    text:string;
    completed:boolean;
}

export const initialState:ToDo[]=[];
export const toDoReducer=createReducer(
    initialState,
    on(addTodo,(state,{text})=>[...state,{id:Date.now(),text:text,completed:false}]),
    on(toggleToDo,(state,{id})=>state.map(todo=>todo.id==id?{...todo,completed:!todo.completed}:todo)),
    on(removeToDo,(state,{id})=>state.filter(todo=>todo.id!==id))
)