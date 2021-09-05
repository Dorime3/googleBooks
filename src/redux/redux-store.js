import { applyMiddleware, combineReducers, createStore } from 'redux'
import findBookReducer from './findBook-reducer';
import thunkMiddleWare from 'redux-thunk';


let reducers = combineReducers({
    findBooksPage: findBookReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;