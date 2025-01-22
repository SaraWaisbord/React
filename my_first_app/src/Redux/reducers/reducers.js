import {ADD_TODO,REMOVE_TODO} from "../actionType"

const initialState={
    todos:[],
}

const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...state,todos: state.todos.concat(action.data)}
        case REMOVE_TODO:
            return {...state ,todos: state.todos.filter((todo)=>todo.payload.id != action.data.id)};
        default:
            return state;
    }
}
export default todoReducer;