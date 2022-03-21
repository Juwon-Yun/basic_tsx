import React from 'react'
import {TextField} from '@material-ui/core'
import * as C from '../../Constants/index'

interface Input {
    id: string,
    label : string,
}
const Inputs = ({ id, label }: Input): JSX.Element => {
    if (id === 'text_id') return <TextField id={`${id}`} autoComplete={"off"} label={`${label}`} defaultValue={
        localStorage.getItem(C.LOCAL.KEY) &&
            JSON.parse(localStorage.getItem(C.LOCAL.KEY) as string).id}
    />
    return <TextField id={`${id}`} autoComplete={"off"} label={`${label}`} />
    
}

export default Inputs