import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {sendFormReducer} from "./sendForm-reducer";



const rootReducer = combineReducers({
  sendFormReducer: sendFormReducer
})


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store