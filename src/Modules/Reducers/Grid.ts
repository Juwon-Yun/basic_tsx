import * as A from '../Actions/Grid'

type GridState = { 
    row : object
}

type GridAction = ReturnType<typeof A.setDetail>

const initialState: GridState = {
    row: {}
}

const grid = (state : GridState = initialState, action : GridAction) => {
    switch (action.type) { 
        case A.SETDETAIL:
            console.log(action.payload, 'payload')
            return {...state, row : action.payload}
        default: 
            return state
    }

}

export default grid