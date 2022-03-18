import React from "react"
import Btn from "../../Components/Button/index.Button"
import Inputs from "../../Components/Input/index.Input"

import * as S from './style.Login'
import * as C from '../../Constants/index'

const arr = [
    {
        id: C.TEXTID.ID,
        label : C.TEXTLABELS.ID
    },
    {
        id: C.TEXTID.PW,
        label : C.TEXTLABELS.PW
    },
]

const Login = () => {

    return (
        <S.Layout>
            <S.Box className="box-container">
                <S.Box_child></S.Box_child>
                <S.Box_child_2>
                    {
                        arr.map((el, i) => {
                            return <Inputs id={el.id} label={el.label} key={i}/>
                        })
                    }
                    <Btn page="/home"></Btn>
                </S.Box_child_2>
            </S.Box>
        </S.Layout>
    )
}

export default Login