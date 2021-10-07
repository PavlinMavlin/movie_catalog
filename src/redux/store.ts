import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension';
import {movieReducer, MovieReducersActionTypes} from "./reducer/movie-reducer";


const rootReducer = combineReducers({
    movieReducer: movieReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = MovieReducersActionTypes
// @ts-ignore
window.store = store;