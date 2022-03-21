import React from 'react'
import {TextField} from '@material-ui/core'
import * as C from '../../Constants/index'

interface Input {
    id: string,
    label : string,
}
const Inputs = ({ id, label }: Input): JSX.Element => {
    if (id === 'text_id') { 
        return <TextField id={`${id}`} autoComplete={"off"} label={`${label}`} />
    } else if (id === 'text_pw') { 
        return <TextField id={`${id}`} label={`${label}`} type="password" />
    }
    return <TextField id={`${id}`} label={`${label}`} />
}

export default Inputs