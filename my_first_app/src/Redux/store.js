
import {createStore} from 'redux';
import todoReducer from '../Redux/reducers/reducers'

const store = createStore(todoReducer);

export default store;