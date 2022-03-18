import styled from "styled-components";

export const Layout = styled.div`
    height : 100%;
    width : 100%;
    display : flex;
    justify-content: center;
    align-content: center;
    background-color : #f6f6f6;
    flex-wrap: wrap;
    color : black;
`
export const Box = styled.div`
    width : 40%;
    height : 50%;
    background-color : #f2f2f2;
    border: 2px solid transparent;
    border-image: linear-gradient(to right, gray 0%, gray 100%);
    border-image-slice: 1;
    display : flex;
`

export const Box_child = styled.div`
    width: 50%;
    background-color: rgb(216, 241, 216);   
`
export const Box_child_2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4%;
`
