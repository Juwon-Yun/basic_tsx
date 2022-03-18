import React from "react"
import Btn from "../../Components/Button/index.Button"
import Inputs from "../../Components/Input/index.Input"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import * as S from './style.Login'
import * as C from '../../Constants/index'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Modules";

interface LoginProps { 
    toggle :boolean
}

const Login = ( { toggle } : LoginProps):JSX.Element => {
    
    const dispatch = useDispatch()
    
    const state = useSelector((state: RootState) => state)


    const remember = () => { 
        if (!localStorage.getItem(C.LOCAL.KEY)) { 
            const id = document.getElementById(`${C.TEXTID.ID}`)
            let idValue = (id as HTMLInputElement).value
            localStorage.setItem(C.LOCAL.KEY, idValue)
        }
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
                        <FormControlLabel control={<Checkbox  onClick={remember}/>} defaultChecked label={`${C.LABELS.RM}`} />
                        :<FormControlLabel control={<Checkbox  onClick={remember}/>} label={`${C.LABELS.RM}`} />
                    }
                    <Btn page={`${C.PAGES.HOME}`}></Btn>
                </S.Box_child_2>
            </S.Box>
        </S.Layout>
    )
}

export default Login