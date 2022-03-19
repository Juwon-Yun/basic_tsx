import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './style.Button.css'
import * as C from '../../Constants/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Modules'
import * as A from '../../Modules/Actions/Local'

interface ButtonProps { 
    page: string
}


const IndexButton = ({ page }: ButtonProps) :JSX.Element  => { 

    const isChecked = useSelector( (state:RootState) => state.local.isChecked )
    console.log(isChecked)

    const setLocalID = () => {
        if (isChecked) {
            const id = document.getElementById(`${C.TEXTID.ID}`)
            let idValue = (id as HTMLInputElement).value
            
            localStorage.setItem(C.LOCAL.KEY, JSON.stringify({ id: isChecked ? idValue : '', check : !isChecked }))
         }
     }


    const history = useHistory()
    
    if (page === 'back') {
        return (<Button onClick={() => { history.goBack() }} variant="contained">뒤로가기</Button>)
    }
    return (<Button onClick={() => { setLocalID(); history.push(page)} } variant="contained">Sign In</Button>)
 
    // return (
    //     <div>
    //         {
    //             {
    //                 '/home' : <Button onClick={() => { history.push(page) }} variant="contained">Sign In</Button>,
    //                 '/back' : <Button onClick={() => { history.goBack() }} variant="contained">뒤로가기</Button>
    //             }[crrent]
    //         }
    //     </div>
    // )
}



export default IndexButton;