import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.actions";

const initialState:number=0;

export const counterReducer=createReducer(initialState,
    on(increment,(state:number)=>state+1),
    on(decrement,(state:number)=>state-1),
    on(reset,(state:number)=>0)

)