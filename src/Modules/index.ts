import { combineReducers } from "redux";
import main from './Reducers/Main'
import local from "./Reducers/Local";

const rootReducer = combineReducers({ main, local })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>