import {ADD_TODO,COUNT_ID,REMOVE_TODO} from "../actionType"

const initialState={
    todos:[],
    id:0,
}


const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...state,todos: state.todos.concat(action.payload)}
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo.id != action.payload.id) }
        case COUNT_ID:
            return { ...state, id: state.id+1}
        default:
            return state;
    }
}
export default todoReducer;