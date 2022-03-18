import * as A from '../Actions/Local'
import * as C from '../../Constants/index'

type LocalState = {
    key : string,
    value : string
}

type LocalAction = ReturnType<typeof A.setRemember>

const initialState: LocalState = {
    key: C.LOCAL.KEY,
    value : C.LOCAL.VALUE as string
}

const local = (state:LocalState = initialState, action : LocalAction) => { 
    switch (action.type) {
        case A.LOCAL:
            return { page : action.payload }
        default:
            return state;
    }
}

export default local