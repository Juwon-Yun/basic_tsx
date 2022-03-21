import React from "react";
import Menu from '../../Components/Menu/index.Menu'
import Grid from '../../Components/Grid/index.Grid'
import Detail from '../../Components/Detail/index.Detail'
import * as S from './style.Home'

const Home = ():JSX.Element => { 
    return (
        <S.Home_container>
            <Menu></Menu>
            <Grid></Grid>
            <Detail></Detail>
        </S.Home_container>
    )
}

export default Home