import React, { ChangeEvent, useEffect, useState } from "react"
import Btn from "../../Components/Button/index.Button"
import Inputs from "../../Components/Input/index.Input"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import * as S from './style.Login'
import * as C from '../../Constants/index'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Modules";
import { stringify } from "querystring";
import * as A from '../../Modules/Actions/Local'

interface LoginProps { 
    toggle :boolean
}

interface temp { 
    id: string,
    check : boolean
}

// const Login = ( { toggle } : LoginProps):JSX.Element => {
const Login = ():JSX.Element => {
    // 3월 18일 토글기능 만들어야함

    const dispatch = useDispatch()
    
    const state = useSelector((state: RootState) => state)

    const [checkBox, toggleCheckBox] = useState(false)

    const [idText, setIdValue] = useState('')
    useEffect(() => {
        if (localStorage.getItem(C.LOCAL.KEY)) { 
            let tmp = ( JSON.parse(localStorage.getItem(C.LOCAL.KEY) as string)).check
            tmp && toggleCheckBox(true)
        }
        return () => {
            localStorage.removeItem(C.LOCAL.KEY)
            
            // const id = document.getElementById(`${C.TEXTID.ID}`)
            // let idValue = (id as HTMLInputElement).value
            console.log(idText)
            localStorage.setItem(C.LOCAL.KEY, JSON.stringify({ id: checkBox ? idText : '', check: !checkBox }))
        }
     },[])

    const handleChecked = () => { 
        // dispatch( Action함수( payload ) )
        dispatch(A.setRemeberID(checkBox))
    }

    // const remember = (e : ChangeEvent<HTMLElement>) => { 
    const remember = () => { 
        // if (e.target !== e.currentTarget) return
        // e.stopPropagation()
        // e.preventDefault()
        
        if (localStorage.getItem(C.LOCAL.KEY)) { 
            localStorage.removeItem(C.LOCAL.KEY)
        }

        if (!localStorage.getItem(C.LOCAL.KEY)) { 
            const id = document.getElementById(`${C.TEXTID.ID}`)
            let idValue = (id as HTMLInputElement).value
            setIdValue(idValue)
            // localStorage.setItem(C.LOCAL.KEY, JSON.stringify({ id: checkBox ? idValue : '', check : !checkBox }))
            toggleCheckBox(!checkBox)
            handleChecked()
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
                    { console.log(checkBox) }
                    <FormControlLabel control={<Checkbox checked={checkBox} onChange={remember}/>} label={`${C.LABELS.RM}`} />
                    <Btn page={`${C.PAGES.HOME}`}></Btn>
                </S.Box_child_2>
            </S.Box>
        </S.Layout>
    )
}

export default Login