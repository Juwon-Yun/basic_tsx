import React from "react";
import * as S from './style.NotFound'
import Button from '../../Components/Button/index.Button'

const NotFound = ():JSX.Element => { 
    return (
        <S.Box>
            <h4>잘못된페이지입니다.</h4>
            <Button page="/back"></Button>
        </S.Box>

    )
}

export default NotFound