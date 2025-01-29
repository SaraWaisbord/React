import {ADD_TODO, REMOVE_TODO,RESTORE_TODO,REMOVE_BIN} from "./actionType"

export const addToDoAction = (payload)=>({
    type:ADD_TODO,
    payload,
});

export const removeToDoAction = (payload)=>({
    type:REMOVE_TODO,
    payload,

});

export const restoreToDoAction = (payload)=>({
    type:RESTORE_TODO,
    payload,
    
});
export const removeFromBinAction = (payload)=>({
    type:REMOVE_BIN,
    payload,
    
});
