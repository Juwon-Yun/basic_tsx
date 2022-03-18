import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './style.Button.css'

interface ButtonProps { 
    page: string
}


const IndexButton = ({ page }: ButtonProps) :JSX.Element  => { 
    
    // const crrent = page

    const history = useHistory()
    
    if (page === 'back') {
        return (<Button onClick={() => { history.goBack() }} variant="contained">뒤로가기</Button>)
    }
    return (<Button onClick={() => { history.push(page) }} variant="contained">Sign In</Button>)
 
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