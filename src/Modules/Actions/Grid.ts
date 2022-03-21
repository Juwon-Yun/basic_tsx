export const SETDETAIL = "grid/setDetail" as const
export const SETDETAILID = "grid/setDetailId" as const

export const setDetail = (diff : object) => ({
    type: SETDETAIL,
    payload : diff
}) 

export const setDetailId = (diff : number) => ({
    type: SETDETAILID,
    payload : diff
})