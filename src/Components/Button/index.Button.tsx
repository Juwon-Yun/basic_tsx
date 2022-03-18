import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './style.Button.css'

interface ButtonProps { 
    page: string
}


const IndexButton = ({ page }: ButtonProps) :JSX.Element  => { 
    
    let history = useHistory()
    
    return (
        <Button onClick={() => { history.push(page) }} variant="contained">Sign In</Button>
    )
}

export default IndexButton;