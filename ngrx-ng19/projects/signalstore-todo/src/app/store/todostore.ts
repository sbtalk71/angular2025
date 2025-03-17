import { removeToDo } from '../../../../ngrx-todo/src/app/store/todos.actions';

import {patchState, signalStore, withMethods, withState} from "@ngrx/signals"
export type Todo={
    id:number;
    text:string;
    completed:boolean;

}

export const todoStore=signalStore(
    {
        providedIn:'root'
    },
    withState<{todos:Todo[]}>({todos:[]}),
    withMethods(state=>({
        addTodo(todo:Todo){
            patchState(state,{todos:[...state.todos(),todo]});
        },
        removeTodo(id:number){
            const filterdItems=state.todos().filter(todo=>todo.id!==id);
            patchState(state,{todos:filterdItems});
        },
        toggleTodo(id:number){

        }
    })),
);