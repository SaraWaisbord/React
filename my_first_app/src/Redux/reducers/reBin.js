import {REMOVE_TODO,RESTORE_TODO,REMOVE_BIN} from "../actionType"


const initialState={
    todos:[],
}


const recycleTodoReducer = (state = initialState,action)=>{

    switch(action.type){
        case RESTORE_TODO:
            return {...state,todos: state.todos.filter((todo) => todo.id != action.payload.id)}
        case REMOVE_TODO:
            console.log(state.todos)
            return { ...state, todos: state.todos.concat(action.payload) }
        case REMOVE_BIN:
            
            return {...state,todos: state.todos.filter((todo) => todo.id != action.payload.id)}
        default:
            return state;
    }
}
export default recycleTodoReducer;