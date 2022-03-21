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

    const dispatch = useDispatch()
    const history = useHistory()

    const state = useSelector( (state:RootState) => state.local )
    
     const clickBtn = () => { 
        const id = document.querySelector('#text_id') as HTMLInputElement
        const idVal = id.value

        dispatch(A.setValue(idVal))
        
        localStorage.setItem('test_chk', JSON.stringify( {key : idVal, ischeck : state.isChecked } ) as string )
    }
    

    
    if (page === 'back') {
        return (<Button onClick={() => { history.goBack() }} variant="contained">뒤로가기</Button>)
    }
    return (<Button onClick={() => { clickBtn(); history.push(page)} } variant="contained">Sign In</Button>)
 
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