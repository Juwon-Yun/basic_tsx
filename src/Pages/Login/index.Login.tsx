import React, { ChangeEvent, useEffect } from "react"
import Btn from "../../Components/Button/index.Button"
import Inputs from "../../Components/Input/index.Input"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import * as S from './style.Login'
import * as C from '../../Constants/index'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Modules";
import * as A from '../../Modules/Actions/Local'

const Login = (): JSX.Element => {
    const dispatch = useDispatch()
    const state = useSelector((state: RootState) => state.local)
    
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('test_chk') as string)
        if (arr) { 
            dispatch(A.setChk(arr.ischeck))
            const id = document.querySelector('#text_id') as HTMLInputElement
            id.value = arr.key
        }
    }, [])

    const onChangeChkBox = (e: ChangeEvent<HTMLElement>) => { 
        const chk = document.querySelector('#chk') as HTMLInputElement
        if (!chk.checked) { 
            localStorage.removeItem('test_chk')
            dispatch(A.setValue(''))
        }
        dispatch(A.setChk(chk.checked))
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
                    <FormControlLabel control={<Checkbox id="chk" checked={state.isChecked} onChange={onChangeChkBox}/>} label={`${C.LABELS.RM}`} />
                    <Btn page={`${C.PAGES.HOME}`}></Btn>
                </S.Box_child_2>
            </S.Box>
        </S.Layout>
    )
}

export default Login