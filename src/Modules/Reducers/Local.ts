import * as A from '../Actions/Local'
import * as C from '../../Constants/index'

type LocalState = {
    key : string,
    value: string,
    isChecked : boolean
}

// type LocalAction = ReturnType<typeof A.setRemember> | ReturnType<typeof A.setRemeberID>
type LocalAction = ReturnType<typeof A.setRemeberID>

const initialState: LocalState = {
    key: C.LOCAL.KEY,
    value: C.LOCAL.VALUE as string,
    isChecked : false
}

const local = (state:LocalState = initialState, action : LocalAction) => { 
    switch (action.type) {
        // case A.LOCAL:
        //     return { page : action.payload }
        case A.REMBMERID:
            return { ...state, isCheck:action.payload }
        default:
            return state;
    }
}

export default local