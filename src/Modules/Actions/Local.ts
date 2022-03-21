export const SETVALUE = "local/setValue" as const
export const SETCHK = "local/setChk" as const

export const setValue = (diff: string) => ({
    type: SETVALUE,
    payload : diff
}) 

export const setChk = (diff : boolean) => ({
    type: SETCHK,
    payload : diff
})