import {ADD_TODO, REMOVE_TODO} from "./actionType"

export const addToDoAction = (payload)=>({
    type:ADD_TODO,
    payload,
});

export const removeToDoAction = (payload)=>({
    type:REMOVE_TODO,
    payload,

});

