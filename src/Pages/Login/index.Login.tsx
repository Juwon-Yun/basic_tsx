import React, { useState } from "react"
import Btn from "../../Components/Button/index.Button"
import Inputs from "../../Components/Input/index.Input"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import * as S from './style.Login'
import * as C from '../../Constants/index'
import { useDispatch } from "react-redux";

const Login = () => {

    const dispatch = useDispatch()
    
    const [toggle, setToggle] = useState(false)

    const remember = () => { 
        const idValue = (document.getElementById(`${C.TEXTID.ID}`) as HTMLInputElement ).value
        console.log(idValue)
        if (!localStorage.getItem('chk')) { 
            localStorage.setItem('chk', idValue)
        }
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <S.Layout>
            <S.Box className={`${C.CN.BC}`}>
                <S.Box_child></S.Box_child>
                <S.Box_child_2>
                    {
                        C.TEXTOBJ.map((el, i) => {
                            return <Inputs id={el.id} label={el.label} key={i}/>
                        })
                    }
                    {
                        toggle ?
                        <FormControlLabel control={<Checkbox defaultChecked onClick={remember}/>} label={`${C.LABELS.RM}`} />
                        :     
                        <FormControlLabel control={<Checkbox  onClick={remember}/>} label={`${C.LABELS.RM}`} />
                    }
                    <Btn page={`${C.PAGES.HOME}`}></Btn>
                </S.Box_child_2>
            </S.Box>
        </S.Layout>
    )
}

export default Login