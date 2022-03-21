import * as A from '../Actions/Local'
import * as C from '../../Constants/index'

type LocalState = {
    value: string,
    isChecked : boolean
}

type LocalAction = ReturnType<typeof A.setValue> | ReturnType<typeof A.setChk>

const initialState: LocalState = {
    value: '',
    isChecked : false
}

const local = (state:LocalState = initialState, action : LocalAction) => { 
    switch (action.type) {
       case A.SETVALUE:
            return { ...state, value: action.payload }
        
        case A.SETCHK:
            return { ...state, isChecked: action.payload }
        
        default:
            return state
    }
}

export default local