import React from "react";
import Grid from '../../Components/Grid/index.Grid'
import * as S from './style.Home'

const Home = ():JSX.Element => { 
    return (
        <S.Home_container>
            <div style={{height : 'calc(100% - 8%)'}}>
                <Grid></Grid>
            </div>
        </S.Home_container>
    )
}

export default Home