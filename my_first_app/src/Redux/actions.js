import {ADD_TODO, REMOVE_TODO} from "./actionType"

export const addToDoAction = (data)=>({
    type:ADD_TODO,
    payload:data,
});

export const removeToDoAction = (data)=>({
    type:REMOVE_TODO,
    payload:data,
});