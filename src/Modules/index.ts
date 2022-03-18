import { combineReducers } from "redux";
import main from './Reducers/Main'

const rootReducer = combineReducers({ main })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>