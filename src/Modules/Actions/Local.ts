export const LOCAL = "local/chk"

export const setRemember = (diff: string) => ({
    type: LOCAL,
    payload : diff
})

// action type을 정의 
export const REMBMERID = "local/REMEMBERID" 

// action 함수 정의
export const setRemeberID = (diff : boolean) =>( { 
    type : REMBMERID,
    payload : diff
})