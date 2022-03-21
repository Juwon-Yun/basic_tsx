import * as A from '../Actions/Grid'

type GridState = {
    row: object,
    id : number
}

type GridAction = ReturnType<typeof A.setDetail> | ReturnType<typeof A.setDetailId>

const initialState: GridState = {
    row: {},
    id : 0
}

const grid = (state : GridState = initialState, action : GridAction) => {
    switch (action.type) { 
        case A.SETDETAIL:
            return { ...state, row: action.payload }
        
        //id값 따로 저장
        case A.SETDETAILID:
            console.log(action.payload, 'payload id')
            return {...state, id : action.payload}
        default: 
            return state
    }

}

export default grid