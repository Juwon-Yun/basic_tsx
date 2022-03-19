import React from 'react'
import {TextField} from '@material-ui/core'
import * as C from '../../Constants/index'

interface Input {
    id: string,
    label : string,
    // i : number
}

interface InputProps { 
    InputList : Input
}

const Inputs = ({ id, label }: Input): JSX.Element => {
    if (id === 'text_id') return <TextField id={`${id}`} label={`${label}`} defaultValue={ localStorage.getItem(C.LOCAL.KEY) && JSON.parse(localStorage.getItem(C.LOCAL.KEY) as string).id} />
    return <TextField id={`${id}`} label={`${label}`} />
    
}

// const Input = ({ id, label, i }: InputProps):JSX.Element => {
    
//     const IterUI = ({ id, label, i }:InputProps):JSX.Element => {
//         for (let x = 0; x < i; x++) {
//           return <TextField id={`${id}`} label={`${label}`} />
//         }
//      }
    
//     return IterUI({id, label, i})

// }

export default Inputs