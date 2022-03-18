import React from "react";
import Menu from '../../Components/Menu/index.Menu'
import Grid from '../../Components/Grid/index.Grid'
import * as S from './style.Home'

const Home = ():JSX.Element => { 
    return (
        <S.Home_container>
            <Menu></Menu>
            <Grid></Grid>
        </S.Home_container>
    )
}

export default Home