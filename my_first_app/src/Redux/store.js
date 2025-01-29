
import {createStore,combineReducers, applyMiddleware} from 'redux';
import todoReducer from './reducers/reducers'
import recycleTodoReducer from './reducers/reBin';
import formMiddlware from '../middlwares/formValidation'

const rootReducers = combineReducers({
    recycleBin:recycleTodoReducer,
    todoReducer:todoReducer,

});
const store = createStore(rootReducers,applyMiddleware(formMiddlware));
console.log(store.getState());

export default store;