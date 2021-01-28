import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'



const rootReducer = combineReducers({

})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store