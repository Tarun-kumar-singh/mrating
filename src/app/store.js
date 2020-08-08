import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { HeartReducer } from "./reducers/heart";
import { NavBarReducer } from "./reducers/navBar";
import { MovieReducers } from "./reducers/movie";
import { RateReducer } from "./reducers/rating";
import { FormReducer } from "./reducers/form";
import { CustomerReducer } from "./reducers/customer";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';


  
const rootReducer = combineReducers({
     MovieReducers, HeartReducer, NavBarReducer, RateReducer, FormReducer, CustomerReducer
    })

export const  Store = createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
    )
