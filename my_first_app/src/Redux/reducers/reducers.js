import {ADD_TODO,REMOVE_TODO} from "../actionType"

const initialState={
    todos:[],
}


const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...state,todos: state.todos.concat(action.payload)}
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo.id != action.payload.id) }
        default:
            return state;
    }
}
export default todoReducer;