import { combineReducers } from "redux";
import main from './Reducers/Main'
import local from "./Reducers/Local";
import grid from './Reducers/Grid'

const rootReducer = combineReducers({ main, local, grid })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>